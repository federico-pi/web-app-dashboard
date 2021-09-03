var trafficCanvas = document.getElementById('traffic').getContext('2d');
var trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};
var trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    y: {
      beginAtZero: true
    }
  },
  // plugins: {
    legend: {
      display: false
    }
  // }
};

var trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

var dailyCanvas = document.getElementById("daily");

var dailyData = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [{
    label: 'Users',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

var dailyOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  // plugins: {
    legend: {
      display: false
    }
  // }
};

var dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

var mobileCanvas = document.getElementById("mobile");

var mobileData = {
  labels: ["Mobile", "Desktop", "Tablet"],
  datasets: [{
    label: '# of Users',
    data: [2000, 500, 150],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

function handleHover(evt, item, legend) {
  legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
    colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
  });
  legend.chart.update();
}

function handleLeave(evt, item, legend) {
  legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
    colors[index] = color.length === 9 ? color.slice(0, -2) : color;
  });
  legend.chart.update();
}

var mobileOptions = {
  // plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold',
        onHover: handleHover,
        onLeave: handleLeave
      }
    }
  // }
};

var mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});
