// utils.js
export function calculateFlavanoidsStatistics(data) {
    const flavanoids = data.map((entry) => entry.Flavanoids);
  
    const mean = flavanoids.reduce((acc, value) => acc + value, 0) / flavanoids.length;
  
    const sortedFlavanoids = [...flavanoids].sort((a, b) => a - b);
    const middle = Math.floor(sortedFlavanoids.length / 2);
    const median =
      sortedFlavanoids.length % 2 === 0
        ? (sortedFlavanoids[middle - 1] + sortedFlavanoids[middle]) / 2
        : sortedFlavanoids[middle];
  
    const mode = findMode(flavanoids);
  
    return { Mean: mean.toFixed(3), Median: median.toFixed(3), Mode: mode.toFixed(3) };
  }
  
  export function calculateGammaStatistics(data) {
    const gammaValues = data.map((entry) => (entry.Ash * entry.Hue) / entry.Magnesium);
  
    const mean = gammaValues.reduce((acc, value) => acc + value, 0) / gammaValues.length;
  
    const sortedGammaValues = [...gammaValues].sort((a, b) => a - b);
    const middle = Math.floor(sortedGammaValues.length / 2);
    const median =
      sortedGammaValues.length % 2 === 0
        ? (sortedGammaValues[middle - 1] + sortedGammaValues[middle]) / 2
        : sortedGammaValues[middle];
  
    const mode = findMode(gammaValues);
  
    return { Mean: mean.toFixed(3), Median: median.toFixed(3), Mode: mode.toFixed(3) };
  }
  
  function findMode(arr) {
    const countMap = new Map();
    let maxCount = 0;
    let mode = null;
  
    for (const value of arr) {
      const count = (countMap.get(value) || 0) + 1;
      countMap.set(value, count);
  
      if (count > maxCount) {
        maxCount = count;
        mode = value;
      }
    }
  
    return mode;
  }
  