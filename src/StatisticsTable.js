// StatisticsTable.js
import React from 'react';

function StatisticsTable({ title, stats }) {
  return (
    <div>
      <h2>{title} Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(stats).map((className) => (
              <th key={className}>Class {className}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(stats).map((measure) => (
            <tr key={measure}>
              <td>{measure}</td>
              {Object.values(stats).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StatisticsTable;
