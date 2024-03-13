function packingProblem(weights, binCapacity) {
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = '';
  
    weights.sort((a, b) => b - a); // Sắp xếp giảm dần theo trọng lượng
  
    let bins = [[]];
    for (const weight of weights) {
      let binFound = false;
  
      for (const bin of bins) {
        const currentBinWeight = bin.reduce((sum, w) => sum + w, 0);
        if (currentBinWeight + weight <= binCapacity) {
          bin.push(weight);
          binFound = true;
          break;
        }
      }
      if (!binFound) {
        bins.push([weight]);
      }
    }
    bins.forEach((bin, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Thùng ${index + 1}: ${bin.join(', ')} | Tổng trọng lượng: ${bin.reduce((sum, w) => sum + w, 0)}`;
      resultsElement.appendChild(listItem);
    });
  }
  const weights = [2, 4, 7, 3, 9, 8];
  const binCapacity = 25;
  packingProblem(weights, binCapacity);
