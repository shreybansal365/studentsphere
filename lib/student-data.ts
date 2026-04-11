import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { app } from "@/lib/firebase";
import type {
  AssignmentItem,
  AttendanceRecord,
  MarksItem,
  SubjectAttendance,
  TimetableSlot,
} from "@/lib/academic";
import { normalizeValue, parseFacultyTimetableEntry } from "@/lib/academic";

interface StudentProfile {
  id: string;
  name?: string;
  username?: string;
  email?: string;
  batch?: string;
  branch?: string;
  slcmAttendanceHTML?: SubjectAttendance[];
  slcmAttendanceData?: SubjectAttendance[];
  slcmTimetableHTML?: Array<{
    day?: string;
    time?: string;
    subject?: string;
    room?: string;
  }>;
  slcmScrapeTime?: string;
}

const dayMap: Record<string, number> = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6,
};

const facultyTimeSlots = [
  { start: "09:00", end: "09:55" },
  { start: "10:00", end: "10:55" },
  { start: "11:00", end: "11:55" },
  { start: "12:00", end: "12:55" },
  { start: "13:00", end: "13:55" },
  { start: "14:30", end: "15:55" },
  { start: "16:00", end: "17:25" },
];

const parseSlcmTime = (value: string) => {
  const cleaned = value.replace(/[^0-9:APMapm\s-]/g, "").trim();
  const [start, end] = cleaned.split("-").map((part) => part.trim());

  const to24Hour = (timeValue?: string) => {
    if (!timeValue) {
      return "00:00";
    }

    const hasPm = /pm/i.test(timeValue);
    const hasAm = /am/i.test(timeValue);
    const raw = timeValue.replace(/[^0-9:]/g, "");
    const [hoursString, minutesString] = raw.split(":");
    let hours = Number(hoursString || "0");
    const minutes = minutesString || "00";

    if (hasPm && hours > 0 && hours < 12) {
      hours += 12;
    }

    if (hasAm && hours === 12) {
      hours = 0;
    }

    return `${String(hours).padStart(2, "0")}:${minutes}`;
  };

  return {
    start: to24Hour(start),
    end: to24Hour(end ?? start),
  };
};

const mapSlcmTimetable = (entries: StudentProfile["slcmTimetableHTML"] = []): TimetableSlot[] => {
  return entries.flatMap((entry) => {
      if (!entry.day || !entry.subject || !entry.time) {
        return [];
      }

      const parsedTime = parseSlcmTime(entry.time);

      return [{
        day: dayMap[entry.day] ?? 0,
        start: parsedTime.start,
        end: parsedTime.end,
        title: entry.subject,
        room: entry.room ?? "SLCM",
        source: "slcm" as const,
      }];
    });
};

export const buildTimetableDocId = (batch?: string, branch?: string) => {
  return `${batch ?? "unknown"}__${normalizeValue(branch ?? "general").replace(/\s+/g, "-")}`;
};

const mapFacultyTimetable = (data: any): TimetableSlot[] => {
  const timetable = data?.timetable as Record<string, string[]> | undefined;
  if (!timetable) {
    return [];
  }

  return Object.entries(timetable).flatMap(([dayName, slots]) => {
    const dayIndex = dayMap[dayName] ?? 0;

    return slots.flatMap((slotValue, index) => {
      if (index === 4) {
        return [];
      }

      const fallback = facultyTimeSlots[index];
      const slot = parseFacultyTimetableEntry(
        slotValue ?? "",
        fallback?.start ?? "00:00",
        fallback?.end ?? "00:00"
      );

      if (!slot) {
        return [];
      }

      return [{ ...slot, day: dayIndex }];
    });
  });
};

export const fetchStudentAcademicBundle = async (uid: string) => {
  const db = getFirestore(app);
  const userSnapshot = await getDoc(doc(db, "users", uid));

  if (!userSnapshot.exists()) {
    return null;
  }

  const profile = {
    id: userSnapshot.id,
    ...(userSnapshot.data() as Omit<StudentProfile, "id">),
  };

  const batch = profile.batch ?? "2026";
  const branch = profile.branch ?? "";

  const [assignmentsSnapshot, marksSnapshot, attendanceSnapshot, facultyTimetableSnapshot] =
    await Promise.all([
      getDocs(query(collection(db, "assignments"), where("batch", "==", batch))),
      getDocs(query(collection(db, "marks"), orderBy("timestamp", "desc"))),
      getDocs(query(collection(db, "attendance"), orderBy("timestamp", "desc"))),
      getDoc(doc(db, "timetables", buildTimetableDocId(batch, branch))),
    ]);

  const assignments: AssignmentItem[] = assignmentsSnapshot.docs.map((assignmentDoc) => ({
    id: assignmentDoc.id,
    ...(assignmentDoc.data() as Omit<AssignmentItem, "id">),
  }));

  const marks: MarksItem[] = [];
  marksSnapshot.docs.forEach((markDoc) => {
    const data = markDoc.data() as any;
    if (data.records && data.records[uid] !== undefined) {
      marks.push({
        id: markDoc.id,
        subject: data.subject,
        examType: data.examType,
        score: data.records[uid],
        timestamp: data.timestamp,
      });
    }
  });

  const attendanceRecords: AttendanceRecord[] = [];
  attendanceSnapshot.docs.forEach((attendanceDoc) => {
    const data = attendanceDoc.data() as any;
    if (data.records && data.records[uid] !== undefined) {
      attendanceRecords.push({
        id: attendanceDoc.id,
        subject: data.subject,
        date: data.date,
        isPresent: Boolean(data.records[uid]),
      });
    }
  });

  const slcmAttendance =
    (Array.isArray(profile.slcmAttendanceHTML) && profile.slcmAttendanceHTML) ||
    (Array.isArray(profile.slcmAttendanceData) && profile.slcmAttendanceData) ||
    [];

  const slcmTimetable = mapSlcmTimetable(profile.slcmTimetableHTML);
  const facultyTimetable = facultyTimetableSnapshot.exists()
    ? mapFacultyTimetable(facultyTimetableSnapshot.data())
    : [];

  return {
    profile,
    assignments,
    marks,
    attendanceRecords,
    slcmAttendance,
    timetableSlots: slcmTimetable.length > 0 ? slcmTimetable : facultyTimetable,
    timetableSource: slcmTimetable.length > 0 ? "slcm" : facultyTimetable.length > 0 ? "faculty" : "none",
    facultyTimetable,
    slcmTimetable,
  };
};
