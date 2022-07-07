const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const partitionHigh = (arr, low, high) => {
  //Pick the first element as pivot
  let pivot = arr[high];
  let i = low;

  //Partition the array into two parts using the pivot
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }

  swap(arr, i, high);

  //Return the pivot index
  return i;
};

const iterativeQuickSort = (arr) => {
  //Stack for storing start and end index
  let stack = [];

  //Get the start and end index
  let start = 0;
  let end = arr.length - 1;

  //Push start and end index in the stack
  stack.push({ x: start, y: end });

  //Iterate the stack
  while (stack.length) {
    //Get the start and end from the stack
    const { x, y } = stack.shift();

    //Partition the array along the pivot
    const PI = partitionHigh(arr, x, y);

    //Push sub array with less elements than pivot into the stack
    if (PI - 1 > x) {
      stack.push({ x: x, y: PI - 1 });
    }

    //Push sub array with greater elements than pivot into the stack
    if (PI + 1 < y) {
      stack.push({ x: PI + 1, y: y });
    }
  }
};

function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];

  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

function testAlgo(arraySize: number) {
  console.log('Array size: ', arraySize);
  let unsorted = Array.from({ length: arraySize }, () =>
    Math.floor(Math.random() * arraySize),
  );
  //console.log(`unsorted array`, unsorted);

  console.time('quickSortRecursiveExecutionTime');
  quicksort(unsorted);
  console.timeEnd('quickSortRecursiveExecutionTime');

  //console.log('Sorted array', sorted);

  console.time('quickSortIterativeExecutionTime');
  iterativeQuickSort(unsorted);
  console.timeEnd('quickSortIterativeExecutionTime');

  //let sortedWithIterative = unsorted;
  //console.log('Sorted array WITH iterative version', sortedWithIterative);
}

testAlgo(10);
testAlgo(100);
testAlgo(1000);
testAlgo(10000);
