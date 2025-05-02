let weights = JSON.parse(localStorage.getItem("weights") || "[]");
let goal = localStorage.getItem("goal");
let weightChart;
function updateUI() {
    drawChart();
}

function drawChart(){

const dataNeeded = weights.slice(-20);
const labels = dataNeeded.map(e => e.date);
const data = dataNeeded.map(e => e.weight);

const ctx = document.getElementById('weightChart').getContext('2d');
    
if(weightChart){
    weightChart.destroy();
}

weightChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: labels,
    datasets: [{
        label: 'Weight (kg)',
        data: data,
        fill: true,
        borderColor: '#FF6C6C',
        tension: 0.4,
        pointBorderColor: '#FF6C6C',
        color: '#fff'
    }]
    },
    options: {
    scales: {
        x: {
        title: {
            display: true,
            text: 'Date',
            
        }
        },
        y: {
        title: {
            display: true,
            text: 'Weight (kg)'
        }
        },
        beginAtZero: false
    }
    },
    plugins: {
    annotation: {
        annotations: goal ? {
        goalLine: {
            type: 'line',
            yMin: goal,
            yMax: goal,
            borderColor: 'red',
            borderWidth: 2,
            label: {
            content: `Goal: ${goal} kg`,
            enabled: true,
            position: 'end',
            backgroundColor: 'rgba(255,0,0,0.6)',
            color: '#fff'
            }
        }
        } : {}
    }
    }
});
}

updateUI();