const lineConfig = {
  type: 'line',
  options: {
    plugins: {
      legend: {
        labels: {
          boxWidth: 20,
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          text: 'Sessions',
          display: true,
          font: {
            weight: 'bold',
          },
        },
        ticks: {
          display: false,
        },
      },
      y: {
        title: {
          text: 'Pomos',
          display: true,
          font: {
            weight: 'bold',
          },
        },
      },
    },
  },
};

export default lineConfig;
