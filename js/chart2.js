
var xValues = ["Lingusitic", "Logical-math","Nauralists",
                "Spatial","Musical","Bodily-kinesthetic","Inrapersonal","Interpersonal"];
var yValues = [60, 40, 80, 70, 50 ,60,30,90,100];
var barColors = ["#FCB335","#98C75F","#00ACA6","#E977AF","#00ADE1","#98C75F","#00ADE1","#98C75F"];

new Chart("myChart2", 
{
    type: "bar",
    data: {
    labels: xValues,
    datasets: [{
        backgroundColor: barColors,
        data: yValues
    }]
    },
    options: {}
});