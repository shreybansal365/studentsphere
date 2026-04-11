"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, firebaseAuth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";

export default function SignUp() {
  const [role, setRole] = useState("student");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [batch, setBatch] = useState("2026");
  const [branch, setBranch] = useState("Computer Science & Engineering");
  const [facultyOrStaff, setFacultyOrStaff] = useState("Faculty");
  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [subjects, setSubjects] = useState("");
  const [error, setError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const router = useRouter();

  const validateEmail = (emailToCheck: string, currentRole: string) => {
    if (currentRole === "student") {
      const regex = /^[a-zA-Z]+\.[0-9]{2}[a-zA-Z0-9]+@muj\.manipal\.edu$/i;
      setIsValidEmail(regex.test(emailToCheck));
    } else if (currentRole === "faculty") {
      const regex = /^[a-zA-Z0-9._%+-]+@jaipur\.manipal\.edu$/i;
      setIsValidEmail(regex.test(emailToCheck));
    } else {
      setIsValidEmail(false);
    }
  };

  const handleSignUp = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!isValidEmail) {
      setError(`Invalid Email. ${role === 'student' ? 'Must follow format: name.23branch1234@muj.manipal.edu' : 'Must end exactly in @jaipur.manipal.edu'}`);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await firebaseAuth.createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      const { sendEmailVerification } = await import('firebase/auth');

      // 2nd Wall: Send Cryptographic Outlook Verification Link
      await sendEmailVerification(user);

      const userData = {
        email,
        role,
        createdAt: new Date(),
      };

      if (role === "student") {
        await setDoc(doc(db, "users", user.uid), {
          ...userData,
          name,
          rollNo,
          username: email.split('@')[0],
          batch,
          branch,
        });
        alert("Verification link sent! Please completely close this app, check your Microsoft Outlook inbox, and click the link before logging into Student Sphere.");
        router.push("/sign-in");
      } else {
        await setDoc(doc(db, "users", user.uid), {
          ...userData,
          name,
          designation,
          subjects: subjects.split(',').map(s => s.trim()).filter(s => s.length > 0),
        });
        router.push("/admin");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Sign-up failed. Please try again.");
      }
    }
    
  };


  return (
    <section>
      <Navbar />
      <section className="bg-black h-[84vh] text-white">
        <div className="px-6 py-12"> {/* Removed flex and justify */}
          <div className="bg-[#070738] shadow-xl rounded-lg p-8 max-w-6xl w-full mx-auto"> {/* Added mx-auto for centering */}
            <h2 className="text-3xl font-semibold text-center text-[#7373ff] mb-6">Create Your Account</h2>
            <form onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Grid layout */}

              {/* 1. Role (Global) */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-[#B3B3B3]">Role</label>
                <select
                  id="role"
                  className="w-full mt-1 p-2 bg-black text-white border border-[#0096FF] rounded-md focus:ring-[#0096FF] focus:border-[#0096FF]"
                  value={role}
                  onChange={(e) => { setRole(e.target.value); validateEmail(email, e.target.value); }}
                >
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                </select>
              </div>

              {/* 2. Name (Global) */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#B3B3B3]">Full Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full mt-1 p-2 bg-black text-white border border-[#0096FF] rounded-md focus:ring-[#0096FF]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* 3-6. Role-specific fields */}
              {role === "student" ? (
                <>
                  {/* Roll Number */}
                  <div>
                    <label htmlFor="rollNo" className="block text-sm font-medium text-[#B3B3B3]">Registration Number</label>
                    <input
                      id="rollNo"
                      type="text"
                      className="w-full mt-1 p-2 bg-black text-white border border-[#0096FF] rounded-md focus:ring-[#0096FF]"
                      value={rollNo}
                      onChange={(e) => setRollNo(e.target.value.toUpperCase())}
                      required
                    />
                  </div>

                  {/* Branch */}
                  <div>
                    <label htmlFor="branch" className="block text-sm font-medium text-[#B3B3B3]">Branch</label>
                    <select
                      id="branch"
                      className="w-full mt-1 p-2 bg-black text-white border border-[#0096FF] rounded-md focus:ring-[#0096FF]"
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                    >
                      <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                      <option value="Information Technology">Information Technology</option>
                    </select>
                  </div>

                  {/* Batch */}
                  <div>
                    <label htmlFor="batch" className="block text-sm font-medium text-[#B3B3B3]">Batch</label>
                    <select
                      id="batch"
                      className="w-full mt-1 p-2 bg-black text-white border border-[#0096FF] rounded-md focus:ring-[#0096FF]"
                      value={batch}
                      onChange={(e) => setBatch(e.target.value)}
                    >
                      {["2025", "2026", "2027", "2028"].map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </>
              ) : (
                <>
                  {/* Designation */}
                  <div>
                    <label htmlFor="designation" className="block text-sm font-medium text-[#B3B3B3]">Designation</label>
                    <input
                      id="designation"
                      type="text"
                      className="w-full mt-1 p-2 bg-black text-white border border-[#0096FF] rounded-md focus:ring-[#0096FF]"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                      required
                    />
                  </div>

                  {/* Subjects (Comma-separated) */}
                  <div className="col-span-1 lg:col-span-2">
                    <label htmlFor="subjects" className="block text-sm font-medium text-[#B3B3B3]">Subjects Taught (comma separated)</label>
                    <input
                      id="subjects"
                      type="text"
                      placeholder="e.g. Agile Methodology, Machine Learning"
                      className="w-full mt-1 p-2 bg-black text-white border border-[#0096FF] rounded-md focus:ring-[#0096FF]"
                      value={subjects}
                      onChange={(e) => setSubjects(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}

              {/* 7. Email (Global) */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#B3B3B3]">Institute Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full mt-1 p-2 bg-black text-white border border-[#0096FF] rounded-md focus:ring-[#0096FF]"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value.toLowerCase()); validateEmail(e.target.value.toLowerCase(), role); }}
                  required
                />
              </div>

              {/* 8. Password (Global) */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#B3B3B3]">Password</label>
                <input
                  id="password"
                  type="password"
                  className="w-full mt-1 p-2 bg-black text-white border border-[#0096FF] rounded-md focus:ring-[#0096FF]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* 9. Confirm Password (Global) */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#B3B3B3]">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="w-full mt-1 p-2 bg-black text-white border border-[#0096FF] rounded-md focus:ring-[#0096FF]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {/* Error Message */}
              <div className="col-span-full"> {/* Span across all columns */}
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              </div>

              {/* Submit Button */}
              <div className="col-span-full"> {/* Span across all columns */}
                <button
                  type="submit"
                  className="w-full bg-[#0096FF] hover:bg-[#45a049] text-white font-semibold py-2 rounded-md transition duration-300 disabled:bg-[#565656]"
                  disabled={!isValidEmail}
                >
                  Sign Up
                </button>
              </div>

              <div className="flex flex-col justify-between">
  <div>
    <p>Note:</p>
    <ul className="list-disc pl-5 text-gray-400 text-sm mt-1 mb-2">
      <li>Students: Use <span className="text-white font-semibold">@muj.manipal.edu</span></li>
      <li>Faculty: Use <span className="text-white font-semibold">@jaipur.manipal.edu</span></li>
      <li>Registration may take up to 1 min, please wait.</li>
    </ul>
  </div>

  <div className="mt-4 text-[#7373ff]">
    Already have an account? 
    <a href="/sign-in" className="text-white"> Login</a>
  </div>
</div>


            </form>
          </div>
        </div>
      </section>
    </section>
  );
}