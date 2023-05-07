const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const content = document.getElementById('content');
    doc.html(content, {
        callback: function () {
            doc.save('document.pdf');
        }
    });
});


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
