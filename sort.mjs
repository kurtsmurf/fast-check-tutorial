/**
 * Sort numeric elements from the smallest to the largest one
 * @param {number[]} numbers - Numeric elements to be sorted
 * @returns {number[]} - Numeric elements sorted from the smallest to the largest one
 */
function sortNumbersAscending(numbers) {
  const sortedNumbers = numbers.slice(0, numbers.length);

  // const sortedNumbers = numbers.slice(0, numbers.length).sort();

  for (let i = 0; i < sortedNumbers.length; i++) {
    for (let j = 0; j < sortedNumbers.length - i - 1; j++) {
      if (sortedNumbers[j] > sortedNumbers[j + 1]) {
        const tmp = sortedNumbers[j];
        sortedNumbers[j] = sortedNumbers[j + 1];
        sortedNumbers[j + 1] = tmp;
      }
    }
  }

  return sortedNumbers;
}

export { sortNumbersAscending };
