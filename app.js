const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://aman1620.github.io/Figma/', { waitUntil: 'networkidle0'});
  await page.emulateMediaType('screen');

  await page.addStyleTag({
    content: `
      body {
        background-image: url('C:\Users\amana\OneDrive\Desktop\FigmaFageNew\images\background3.png');
        background-size: cover;
      }
    `
  });

  // Set margin options
  const margin = {
    top: '2cm',
    bottom: '1cm',
    left: '1cm',
    right: '1cm'
  };

  const pdf = await page.pdf({ 
    format: 'A4',
    margin : margin,
    printBackground: true,
    });

  await browser.close();

  // Write the PDF to a file
  const fs = require('fs');
  fs.writeFileSync('example.pdf', pdf);
})();


// const downloadBtn = document.getElementById('download-btn');
// downloadBtn.addEventListener('click', () => {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
//     const content = document.getElementById('content');
//     doc.html(content, {
//         callback: function () {
//             doc.save('document.pdf');
//         }
//     });
// });


// function convertHTMLtoPDF() {
//     const { jsPDF } = window.jspdf;

//     var doc = new jsPDF('l', 'mm', [1500, 1400]);
//     var pdfjs = document.querySelector('#divID');

//     doc.html(pdfjs, {
//         callback: function(doc) {
//             doc.save("newpdf.pdf");
//         },
//         x: 12,
//         y: 12
//     });               
// }  
