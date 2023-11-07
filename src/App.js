// App.js
import React from 'react';
import './App.css'; // You can include your CSS styles here
import { calculateFlavanoidsStatistics, calculateGammaStatistics } from './utils';
import StatisticsTable from './StatisticsTable';
import wineData from './data';

function App() {
  const flavanoidsStats = calculateFlavanoidsStatistics(wineData);
  const gammaStats = calculateGammaStatistics(wineData);

  return (
    <div className="App">
      <h1>Wine Data Set Statistics</h1>
      <StatisticsTable title="Flavanoids" stats={flavanoidsStats} />
      <StatisticsTable title="Gamma" stats={gammaStats} />
    </div>
  );
}

export default App;
