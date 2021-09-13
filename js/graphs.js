// --TRAFFIC CHART--

const trafficCanvas = document.getElementById('traffic');

let trafficDataHourly = {
  labels: [
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm'
  ],
  datasets: [{
    data: [30, 25, 13, 26, 35, 39, 21, 23, 16, 32, 23],
    backgroundColor: 'rgba(116, 119, 191, .4)',
    borderWidth: 1,
  }]
};

let trafficDataDaily = {
  labels: [
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ],
  datasets: [{
    data: [321, 245, 280, 329, 195, 265, 379, 242, 334, 298, 318],
    backgroundColor: 'rgba(116, 119, 191, .4)',
    borderWidth: 1,
  }]
};

let trafficDataWeekly = {
  labels: [
    '16-22 Oct',
    '23-29 Oct',
    '30-5 Nov',
    '6-12 Nov',
    '13-19 Nov',
    '20-26 Nov',
    '27-3 Dec',
    '4-10 Dec',
    '11-17 Dec',
    '18-24 Dec',
    '25-31 Dec'
  ],
  datasets: [{
    data: [2046, 2141, 1755, 1890, 1987, 2019, 2349, 1845, 2167, 1850, 1959],
    backgroundColor: 'rgba(116, 119, 191, .4)',
    borderWidth: 1,
  }]
};

let trafficDataMonthly = {
  labels: [
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov'
  ],
  datasets: [{
    data: [7253, 7878, 7760, 7312, 8251, 7949, 7053, 7309, 7534, 7348, 7673, 7495],
    backgroundColor: 'rgba(116, 119, 191, .4)',
    borderWidth: 1
  }]
};

const trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    y: {
      beginAtZero: true
    }
  },
  legend: {
    display: false
  }
};

const trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficDataWeekly,
  options: trafficOptions
});

const trafficSection = document.querySelector('.traffic-navigation');
const trafficLinks = document.querySelectorAll('.traffic-nav-link');
const canvasContainer = trafficCanvas.parentNode;

function resetCanvas(canvasContainer) {
  let newTrafficCanvas = document.createElement('canvas');
  newTrafficCanvas.id = canvasContainer.querySelector('canvas').id;
  canvasContainer.innerHTML = '';
  canvasContainer.appendChild(newTrafficCanvas);
  return newTrafficCanvas;
}

trafficSection.addEventListener('click', (e) => {
  if (e.target.className.includes('traffic-nav-link')) {
    const selected = e.target;
    const container = selected.parentNode;
    for (let i = 0; i < trafficLinks.length; i++) {
      if (trafficLinks[i].classList.contains('active')) {
        trafficLinks[i].classList.remove('active');
      }
    }
    selected.classList.add('active');
    let trafficData;
    if (selected.textContent.toLowerCase() === 'hourly') {
      trafficData = trafficDataHourly;
    } else if (selected.textContent.toLowerCase() === 'daily') {
      trafficData = trafficDataDaily;
    } else if (selected.textContent.toLowerCase() === 'weekly') {
      trafficData = trafficDataWeekly;
    } else if (selected.textContent.toLowerCase() === 'monthly') {
      trafficData = trafficDataMonthly;
    }

    let trafficChart = new Chart(resetCanvas(canvasContainer), {
      type: 'line',
      data: trafficData,
      options: trafficOptions,
    });
  }
});

// --DAILY CHART--

const dailyCanvas = document.getElementById('daily');

const dailyData = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [{
    label: 'Users',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  legend: {
    display: false
  }
};

const dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// --MOBILE CHART--

const mobileCanvas = document.getElementById('mobile');

const mobileData = {
  labels: ['Mobile', 'Desktop', 'Tablet'],
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

const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold',
      onHover: handleHover,
      onLeave: handleLeave
    }
  }
};

const mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

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
