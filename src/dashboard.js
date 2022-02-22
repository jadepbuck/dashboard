import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Chart from 'react-google-charts';

function Dashboard() {

  const TITLE = 'Quantidade de cadastros 1º semestre';
  const ANIMATION = { duration: 1000, easing: 'out', startup: true };

  const [data, setData] = useState([
    ['Mês', 'Quantidade'],
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 13],
    ['Junho', 90]
  ]);

  useEffect(() => {
    function changeData() {
      const graphicsData = data.map(line => {
        if (Number.isInteger(line[1])) {
          line[1] = Math.floor(Math.random() * 101);
        }
        return line;
      });
      setData(graphicsData);
    }

    const intervalId = setInterval(() => changeData(), 5000);

    return () => {
      clearInterval(intervalId);
    }

  }, [data]);

  return (
    <div>
      <h1>Dashboard</h1>
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={data}
        options={{
          title: TITLE
        }} />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={data}
        options={{
          title: TITLE,
          is3D: true
        }} />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={data}
        options={{
          title:  TITLE,
          pieHole: 0.4
        }} />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'BarChart'}
        data={data}
        options={{
          title:TITLE,
          chartArea:{ width: '50%' },
          hAxis:{ title: 'Quantidade' },
          vAxis: { title: 'Mês' },
          animation: ANIMATION
        }} />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'LineChart'}
        data={data}
        options={{
          title: TITLE,
          hAxis:{ title: 'Mês' },
          vAxis:{ title: 'Quantidade' },
          animation: ANIMATION
        }} />
      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'AreaChart'}
        data={data}
        options={{
          title: TITLE,
          vAxios: { title: 'Mês' },
          hAxios: { title: 'Quantidade' },
          animation: ANIMATION
        }} />
    </div>
  );
}

export default Dashboard;