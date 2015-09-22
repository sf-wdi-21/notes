### Week 4 Drills -- solutions

##Day 1 - Binary Search
Serial Version:

```javascript

function binarySearch(searchArray, searchElement) {
  var min = 0;
  var max = searchArray.length - 1;
  var mid;
  var currentElement;

  while (min <= max) {
    mid = (min + max) / 2 | 0;
    currentElement = searchArray[mid];

    if (currentElement < searchElement) {
        min = mid + 1;
    }
    else if (currentElement > searchElement) {
        max = mid - 1;
    }
    else {
        return mid;
    }
  }

  return -1;
}


```

Recursive Version:

```javascript

function binarySearchR(searchArray, searchElement, min, max) {
  if (max < min) { return null; }
 
  var mid = Math.floor((min + max) / 2);
 
  if (searchArray[mid] > searchElement) {
    return binarySearchR(searchArray, searchElement, min, mid - 1);
  }
  
  if (searchArray[mid] < searchElement) {
    return binarySearchR(searchArray, searchElement, mid + 1, max);
  }
  return mid;
}

```


##Day 3: Bubble Sort

```javascript
function bubbleSort(array) {
  var end = array.length - 1;
  // create a swapped switch (true/false)
  var swapped = true;
  // while our switch is 'true'
  while(swapped){
    //console.log(array);
    // flip the swapped switch to false
    swapped = false;
    for(var i = 0; i < end; ++i) {
      // If an element is greater than its neighbor
      if (array[i] > array[i+1]) {
        // swap the element and its neighbor
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        // flip the switch to true
        swapped = true;
      }
    }
    end--;
  }
};

```


##Day 4 Merge sort!

```javascript

function mergeSort(arr) {
  // if the array is length one or zero, return the array
  if (arr.length < 2) {
    return arr;
  }
  // figure out the middle point
  var middle = parseInt(arr.length / 2);
  
  // create an array of the left half
  var left = arr.slice(0, middle);

  // create an array of right half
  var right = arr.slice(middle, arr.length);

  // call merge on a recursively called left half and right half
  return merge(mergeSort(left), mergeSort(right));
}
 


```

```javascript

function merge(left, right) {
  var result = [];

  // while both arrays have elements in them, zip them together
  while (left.length && right.length) {
    // if the left array first element is less than the right array first element, push to result
    if (left[0] <= right[0]) {
        result.push(left.shift());\
    // else push the right array first element to result
    } else {
        result.push(right.shift());
    }
  }

  // if left is the only array with elements, push them all in
  while (left.length) {
      result.push(left.shift());
  // if right is the only array with elmeents, push them all in
  }
  while (right.length) {
    result.push(right.shift());
  }
  // return final result
  return result;
}


```
