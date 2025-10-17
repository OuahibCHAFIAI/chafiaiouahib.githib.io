// Mini dashboard Chart.js
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Projet Power BI', 'Tableau', 'Excel'],
        datasets: [{
            label: 'Performance (%)',
            data: [85, 90, 75],
            backgroundColor: ['#00ffff', '#ff00ff', '#ffff00']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            y: { beginAtZero: true, max: 100 }
        }
    }
});
