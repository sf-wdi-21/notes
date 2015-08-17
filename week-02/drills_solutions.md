### Week 2 Drills -- solutions

#### isEmpty()

``` javascript
function isEmpty() {
  return !onBlue() && !onGreen();
}
```

#### moveRight(n)
``` javascript
function moveRight(n) {
  n = n || 1; // by default move 1 space if n is not defined
  for(var i=0; i<n; i++){
    $(".instructions").append("<div>moveRight</div>");
    if(kyrel.x < row.x - 1) {
      kyrel.x = kyrel.x + 1;
      updateRow();
    }
  }
}
```

#### moveLeft(n)
``` javascript
function moveLeft(n) {
  n = n || 1; // by default move 1 space if n is not defined
  for(var i=0; i<n; i++){
    $(".instructions").append("<div>moveLeft</div>");
    if(kyrel.x > 0) {
      kyrel.x = kyrel.x - 1;
      updateRow();
    }
  }
}
```

#### move(direction, times)

``` javascript
function move(direction, times) {
  if (direction === "r") {
    moveRight(times);
  } else if (direction === "l") {
    moveLeft(times);
  }
}
```


#### n_cell_rows
Hint: You will need to dynamically generate html and add it to the row in the DOM. Start by removing all the `td` elements from `index.html`. How would you add them back using javascript/jquery?

#### HTML Strings
Pending

#### Letter Frequency Counter
Pending

#### Merge
Pending
