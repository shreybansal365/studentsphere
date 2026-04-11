const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    console.log('Navigating to login...');
    await page.goto('https://mujslcm.jaipur.manipal.edu/', { waitUntil: 'domcontentloaded' });

    await page.type('#txtUserName', 'shrey.23FE10CSE00848');
    await page.type('#txtPassword', 'Shruti1982*');

    console.log('Logging in...');
    await Promise.all([
      page.click('#login_submitStudent'),
      page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 })
    ]);

    console.log('Logged in. Navigating to timetable...');
    await page.goto('https://mujslcm.jaipur.manipal.edu/Student/Academic/ViewTimeTableForStudent', { waitUntil: 'networkidle2' });
    fs.writeFileSync('timetable_sample.html', await page.content());
    console.log('Saved timetable.');

    console.log('Navigating to attendance...');
    await page.goto('https://mujslcm.jaipur.manipal.edu/Student/Academic/ViewAttendance', { waitUntil: 'networkidle2' });
    fs.writeFileSync('attendance_sample.html', await page.content());
    console.log('Saved attendance.');

    await browser.close();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
