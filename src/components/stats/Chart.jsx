// src/components/MultiLineChart.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MultiLineChart = () => {
  const [selectedFilter, setSelectedFilter] = useState('This month');

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#742774',
        tension: 0.1,
      },
      {
        label: 'Dataset 3',
        data: [18, 48, 77, 9, 100, 27, 40],
        fill: false,
        borderColor: '#ff6384',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Multi Line Chart',
      },
    },
    maintainAspectRatio: false,
  };

  // Placeholder data for filtering purposes
  const filters = {
    'Today': { labels: ['Today'], data: [[65], [28], [18]] },
    'Yesterday': { labels: ['Yesterday'], data: [[59], [48], [48]] },
    'This week': { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], data: [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90], [18, 48, 77, 9, 100, 27, 40]] },
    'This month': data
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const currentChartData = filters[selectedFilter];

  return (
    <div style={{ margin: '50px', border: 'solid 1px', padding: '50px', borderRadius: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <select value={selectedFilter} onChange={handleFilterChange} style={{ padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ddd' }}>
          <option value="Today">Today</option>
          <option value="Yesterday">Yesterday</option>
          <option value="This week">This week</option>
          <option value="This month">This month</option>
        </select>
      </div>
      <div style={{ width: '100%', height: '500px' }}>
        <Line data={currentChartData} options={options} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table style={{ width: '80%', marginTop: '50px', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Month</th>
              {data.datasets.map((dataset, index) => (
                <th key={index} style={{ border: '1px solid #ddd', padding: '8px' }}>{dataset.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.labels.map((label, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{label}</td>
                {data.datasets.map((dataset, datasetIndex) => (
                  <td key={datasetIndex} style={{ border: '1px solid #ddd', padding: '8px' }}>{dataset.data[index]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MultiLineChart;
