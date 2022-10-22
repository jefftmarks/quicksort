function partition(array, low, high) {
  let pivotIndex = high;

	let i = low;

	while (i < pivotIndex) {
		if (array[i] <= array[pivotIndex]) {
			i++;
		} else {
			[array[i], array[pivotIndex - 1]] = [array[pivotIndex - 1], array[i]];
			[array[pivotIndex], array[pivotIndex - 1]] = [array[pivotIndex - 1], array[pivotIndex]];
			pivotIndex = pivotIndex - 1;
		}
	}

	return pivotIndex;
}

function quicksort(array, low = 0, high = array.length - 1) {
	if (low >= high) {
		return array;
	}

	const pivotIndex = partition(array, low, high);

	quicksort(array, low, pivotIndex - 1);
	quicksort(array, pivotIndex + 1, high);

	return array;

}

if (require.main === module) {
  // add your own tests in here

  // console.log("Expecting: [1, 2, 2, 3]");
  // console.log(quicksort([3, 2, 1, 2]));

  // console.log("");

  // console.log("Expecting: [1, 2, 2, 3, 4]");

	const arr = [3, 7, 8, 5, 2, 1, 9, 5, 4]
	console.log(quicksort(arr));
}

module.exports = quicksort;

// Please add your pseudocode to this file
// And a written explanation of your solution
