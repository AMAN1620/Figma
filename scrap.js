const puppeteer = require('puppeteer');

async function downloadPDF(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // set the page size and margins
  await page.setViewport({
    width: 1200,
    height: 800,
    deviceScaleFactor: 1,
  });
  await page.emulateMediaType('print');
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `@page {
      margin: 1cm;
    }`;
    document.head.appendChild(style);
  });

  // navigate to the URL and wait for the page to load
  await page.goto(url, { waitUntil: 'networkidle0' });

  // trigger the print dialog using Ctrl+P
  await page.keyboard.down('Control');
  await page.keyboard.press('KeyP');
  await page.keyboard.up('Control');
  
  // wait for the print dialog to appear and press Enter to start the download
  await page.waitForDevicePrompt(3000); // adjust this delay as needed
  await page.keyboard.press('Enter');

  // close the browser
  await browser.close();
}

// call the function with the URL of the page you want to download as PDF
downloadPDF('https://aman1620.github.io/Figma/');
