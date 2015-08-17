# Week 2 Drills

### Extending Kyrel
It's time to dig a little deeper into the guts of kyrel. The following functionality doesn't exist in the current implementation of the game. Let's add it!

0. is_empty_method - [solution](drills_solutions.md#isempty)
    
    Create a utility method called `isEmpty` that checks the current cell for color and returns a boolean.

1. move_right_n_method - [solution](drills_solutions.md#moverightn)
    
    By default `moveRight` and `moveLeft` move the kyrel one cell at a time. Modify both methods so that they take an integer as an argument, representing the number of times to move in that direction. (Make sure that the default behavior continues to work too!)

2. move_method - [solution](drills_solutions.md#movedirection-times)
    
    Refactor your solution to #2 above. Your goal is to create a generic `move` method tbat takes two arguments: the direction of movement, and the number of steps/movements to take: e.g. `move("r", 4)`.

3. n_cell_rows - [solution](drills_solutions.md#n_cell_rows)

    Currently it is only possible to have a 5 cell row in kyrel. Modify the code so that the length of the row can easily be changed by updating a single variable.

### HTML Strings

For the following challanges, please use this [data object](https://gist.githubusercontent.com/nathanallen/8b7fe7e58f10dd6e0825/raw/390e7f7dcc5c4c8ed561cb6f4eacfd9a4545fed5/wdi21.json).

0. As a warmup, try to output the following values:
    * the name of the course
    * the first student's id and full name
    * the number of students in the class
    * a list of github usernames

1. Create a function `buildGithubLink` that transforms a single student's info into an html string, with the following format:

```
<a href="https://github.com/torvalds">Linus Torvalds</a>
```

2. Using the function you just built, create a function called `renderGithubLinks` that takes an array of students and adds their github links to the page.

Extra points if you use built-in Array methods like `forEach`, `map`, and `join` and only insert into the DOM once.

### Letter Frequency Counter

Write a function that counts the number of times each letter occurs in a given string. It should return an object containing the count for each letter.

For example, given the word "apple", `letterCount("apple")` should return:

```javascript
{
  a: 1,
  p: 2,
  l: 1,
  e: 1
}
```

**Bonus**: Make sure that lower case letters and upper case letters count for the same character. Also, ignore spaces and punctuation.

**Stretch**: What are the three most common consonants in the English Language? Calculate the frequency distribution of letters in a given text corpus. Extra points if you can output them in order of percent frequency, i.e. given "zoo" it should output:

``` javascript
"o" 0.66
"z" 0.33
```

### Merge

Write a function that takes two sorted arrays of numbers and returns a merged array of the sorted numbers. For example:

```
var arr1 = [3,6,11];
var arr2 = [2,4,5,8,9];

merge(arr1, arr2);
// [2,3,4,5,6,8,9,11]
```

Before you start: write some tests! Create a series of simple tests that prove you're getting the correct output (and will make your life easier as a developer).
