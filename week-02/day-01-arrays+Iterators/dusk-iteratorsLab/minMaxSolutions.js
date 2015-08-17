//example min solution
function min(list) {
  var min = Infinity;
  for (var i = 0; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }
  return min;
}

//example max solution
function max(list) {
  var max = -Infinity;
  for (var i = 0; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
}