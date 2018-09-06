// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'm.xynpax.kitrol', // App bundle ID
  name: 'Kitrol', // App name
  theme: 'ios',

  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },

  // App routes
  routes: routes,
  touch: {
    // Disable fast clicks
    fastClicks: true,
  }

});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

if (app.views.main.router.currentRoute.url="/"){
//do some thing
}

// Circle Progressbar

// Today diesel
var tdbar = new ProgressBar.Circle('#td-inv', {
  color: '#2196f3',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2196f3', width: 5 },
  to: { color: '#2196f3', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('' + '%');
    } else {
      circle.setText('<strong>' + value + '</strong><i>%</i>');
    }

  },
  trailColor: '#b3e5fc'
});

tdbar.text.style.fontSize = '18px';
tdbar.animate(0.75);

// Today premium
var tpbar = new ProgressBar.Circle('#tp-inv', {
  color: '#f44336',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#f44336', width: 5 },
  to: { color: '#f44336', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('' + '%');
    } else {
      circle.setText('<strong>' + value + '</strong><i>%</i>');
    }

  },
  trailColor: '#ffcdd2'
});
tpbar.text.style.fontSize = '18px';
tpbar.animate(0.5);

// Today unleaded
var tubar = new ProgressBar.Circle('#tu-inv', {
  color: '#4caf50',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 8,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#4caf50', width: 5 },
  to: { color: '#4caf50', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('' + '<i>%</i>');
    } else {
      circle.setText('<strong>' + value + '</strong><i>%</i>');
    }
  },
  trailColor: '#c8e6c9'
});
tubar.text.style.fontSize = '18px';
tubar.animate(0.25);

// January total diesel
var j1tdbar = new ProgressBar.Circle('#j1td-inv', {
  color: '#2196f3',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#2196f3', width: 5 },
  to: { color: '#2196f3', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('' + '%');
    } else {
      circle.setText('<strong>' + value + '</strong><i>%</i>');
    }

  },
  trailColor: '#b3e5fc'
});

j1tdbar.text.style.fontSize = '18px';
j1tdbar.animate(0.75);

// January Total premium
var j1tpbar = new ProgressBar.Circle('#j1tp-inv', {
  color: '#f44336',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#f44336', width: 5 },
  to: { color: '#f44336', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('' + '%');
    } else {
      circle.setText('<strong>' + value + '</strong><i>%</i>');
    }

  },
  trailColor: '#ffcdd2'
});
j1tpbar.text.style.fontSize = '18px';
j1tpbar.animate(0.5);

// January Total unleaded
var j1tubar = new ProgressBar.Circle('#j1tu-inv', {
  color: '#4caf50',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 10,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#4caf50', width: 5 },
  to: { color: '#4caf50', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('' + '<i>%</i>');
    } else {
      circle.setText('<strong>' + value + '</strong><i>%</i>');
    }
  },
  trailColor: '#c8e6c9'
});
j1tubar.text.style.fontSize = '18px';
j1tubar.animate(1);

// Today chart - Chart.js
var mode = 'index'; // for all chart.js

var chart2 = document.getElementById('todaySales').getContext('2d');
var data2  = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [{
    label: '',
    backgroundColor: 'transparent',
    pointBackgroundColor: '#f44336',
    pointHitRadius:0,
    pointHoverRadius:0,
    pointRadius: 0,
    borderWidth: 2,
    borderColor: '#f44336',
    data: [30, 350, 80, 91, 340, 300, 60, 100, 50, 600, 300, 100],
    fill: false
  }]
};

var options2 = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    easing: 'easeInOutQuad',
    duration: 520
  },
  hover: {
    intersect: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        lineWidth: 0
      }
    }],
    yAxes: [{
      display: false,
      beginAtZero:0,
      gridLines: {
        color: 'transparent',
        lineWidth: 0
      }
    }]
  },
  elements: {
    line: {
      tension: 0.4
    }
  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: false,
    backgroundColor: 'rgba(0,0,0,0.3)',
    titleFontColor: 'red',
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
    intersect: false
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  }
};

var chartInstance2 = new Chart(chart2, {
  type: 'line',
  data: data2,
  options: options2
});

// Total this year chart - Chart.js
var chart  = document.getElementById('yearSales').getContext('2d'),
  gradient = chart.createLinearGradient(0, 0, 0, 600);

  gradient.addColorStop(0, 'rgba(244, 67, 54, .1)');
  gradient.addColorStop(0.3, 'white');
  gradient.addColorStop(1, 'white');

var data  = {
  labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
  datasets: [{
    label: '',
    backgroundColor: gradient,
    pointBackgroundColor: '#f44336',
    borderWidth: 2,
    pointRadius: 0,
    borderColor: '#f44336',
    data: [300000, 2500000, 800000, 910000, 5400000, 5000000, 600000, 10000000, 5000000, 600000, 8000000, 1000000],
    fill: true
  }]
};

var options = {
  responsive: true,
  animation: {
    easing: 'easeInOutQuad',
    duration: 520
  },
  hover: {
    mode: mode,
    intersect: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        lineWidth: 0
      }
    }],
    yAxes: [{
      ticks: {
        min: 100000,
        stepSize: 2000000,
        callback: function(value, index, values) {
          if(parseInt(value) >= 1000000){
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'm';

          }
          if(parseInt(value) >= 1000){
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'k';
          } else {
            return value;
          }
        }
      },
      gridLines: {
        color: 'transparent',
        lineWidth: 0
      }

    }]
  },
  elements: {
    line: {
      tension: 0.4
    }
  },
  legend: {
    display: false
  },
  tooltips: {
    titleFontFamily: 'Open Sans',
    backgroundColor: 'rgba(0,0,0,0.3)',
    titleFontColor: 'red',
    caretSize: 5,
    cornerRadius: 2,
    xPadding: 10,
    yPadding: 10,
    mode: mode,
    intersect: false
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  }
};

var chartInstance = new Chart(chart, {
  type: 'line',
  data: data,
  options: options
});
