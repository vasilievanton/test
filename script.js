$(document).ready(function() {
    $('.header__menu-icon').click(function(event) {
        $('.header__menu-icon,.menu,.menu-block').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.sidebar').click(function(event) {
        $('.sidebar').toggleClass('disable');
    });
});

// const ctx = document.getElementById('revenue__chart').getContext('2d');

// const labels = ['Mar 1', 'Mar 8', 'Mar 15', 'Mar 22', 'Mar 29', 'Apr 5', 'Apr 12', 'Apr 19', 'Apr 26', 'May 2', 'May 9', 'May 16', 'May 23', 'May 30']

// const data = {
//     labels: labels,
//     datasets: [{
//         llabel: 'My First dataset',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: [0, 10, 5, 2, 20, 30, 45],
//     }]
// }

// const myChart = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });