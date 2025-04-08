const barData = {
    labels: ['Xiaomi Redmi', 'Комод белый', 'Hyundai Accent', 'Adidas Campus', 'Acer Nitro', 'Свитшот Nike'],
    datasets: [{
        label: 'Цена (в тг)',
        data: [41074, 15545, 1066861, 22000, 230990, 8000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const barConfig = {
    type: 'bar',
    data: barData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const bubbleData = {
    datasets: [{
        label: 'Товары',
        data: [
            { x: 41074, y: 1, r: 15 },
            { x: 15545, y: 1, r: 10 },
            { x: 1066861, y: 1, r: 30 },
            { x: 22000, y: 1, r: 12 },
            { x: 230990, y: 1, r: 25 },
            { x: 8000, y: 1, r: 8 },
        ],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
    }]
};

const bubbleConfig = {
    type: 'bubble',
    data: bubbleData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
            }
        },
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Цена (в тг)',
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Количество',
                }
            }
        }
    }
};

new Chart(document.getElementById('barChart'), barConfig);

new Chart(document.getElementById('bubbleChart'), bubbleConfig);