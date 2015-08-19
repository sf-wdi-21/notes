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

Good:
``` javascript
function buildGithubLink(student) {
  var full_name = student.first_name + " " + student.last_name;
  var url = "http://github.com/" + student.github_username;
  return "<a href='" + url + "'>" + full_name + "</a>";
}

function renderGithubLinks(students){
  students.forEach(function(student){
    var link = buildGithubLink(student);
    $("body").append( link + "</br>" );
  });
}

renderGithubLinks( data.students );
```

Better optimized:
``` javascript
function renderGithubLinks(students){
  var anchors = students.map(buildGithubLink);
  var html = anchors.join("</br>");
  $("body").append( html );
}

renderGithubLinks( data.students );
```

#### Letter Frequency Counter
Good:
``` javascript
function characterFrequency(str){
  var output = {};

  str.split("").forEach(function(char){
    if ( char !== " " ) {
      var count = output[char];
      if ( count === undefined ) {
        output[char] = 1;
      } else {
        output[char] = count + 1;
      }
    }
  })

  return output;
}
```


Better:
``` javascript
function characterFrequency(str){
  var output = {},
      len = str.length,
      char,
      count;

  for(var i=0; i<len; i++) {
    char = str[i];
    if ( char === " " ) { continue; }
    count = output[char];
    output[char] = ( count ? count + 1 : 1 );
  }

  return output;
}
```

#### Merge
Pending
