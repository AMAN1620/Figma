const puppeteer = require('puppeteer');

async function downloadHtmlToPdf(pdfFilePath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the dimensions of the viewport to match the dimensions of the page.
  await page.setViewport({
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
  });
  
  // Navigate to the HTML file.
  const url = "https://aman1620.github.io/Figma/";
  await page.goto(url, { waitUntil: 'networkidle0' });
  
  // Wait for the page to load completely.
  await page.waitForSelector('body');
  
  // Generate the PDF.
  await page.pdf({
    path: pdfFilePath,
    format: 'A4',
    printBackground: true,
    margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' },
  });
  await browser.close();

  // Write the PDF to a file
}

// Example usage:
downloadHtmlToPdf('C:\Users\amana\OneDrive\Desktop\FigmaFageNew');
