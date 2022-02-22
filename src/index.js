function towelSort(matrix) {
  if (!matrix) {
    return [];
  }
  return matrix
    .map((array, index) => index % 2 === 0 ? array : array.reverse())
    .reduce((acc, array) => acc.concat(array), [])
}

module.exports = towelSort;
