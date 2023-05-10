var xValues = ["Emotional Stability", "Aggreableness","Extraversion",
                "Conscientiousness","Open to Experience"];
var yValues = [60, 40, 80, 70, 50 ,100];
var barColors = ["#FCB335","#98C75F","#00ACA6","#E977AF","#00ADE1"];

new Chart("myChart", 
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