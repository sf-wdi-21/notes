##Week Four Drills

###Day 1 - Binary Search


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
