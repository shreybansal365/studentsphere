const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://mujslcm.jaipur.manipal.edu/', { waitUntil: 'domcontentloaded' });
  const html = await page.content();
  console.log(html);
  await browser.close();
})();
