import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  labels: labels,
  datasets: [
    {
      type: 'bar',
      //   label: 'My First dataset',

      backgroundColor: '#5ce4f5',
      borderColor: 'rgb(255, 99, 132)',
      data: [
        500, 1000, 1500, 4500, 6000, 5000, 3000, 2000, 1000, 1000,
        1500, 500,
      ],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    responsive: true,
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'US$',
        color: '#757575',
        font: {
          size: 12,
          weight: 500,
        },
      },
      beginAtZero: true,
      ticks: {
        stepSize: 500,
        font: {
          size: 11,
        },
      },
    },
    x: {
      title: {
        display: true,
        text: 'Months',
        color: '#757575',
      },
      ticks: {
        autoSkip: false,
        maxRotation: 0,
        minRotation: 0,
        font: {
          size: 11,
        },
      },
    },
  },
  maintainAspectRatio: false,
};

const BarChart = () => {
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;
