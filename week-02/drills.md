# Week 1 Drills

For this week's drills we will be playing a game called "Kyrel".

In this game, you will be given a row and asked to transform it into a different row. For instance, you might be given a row with five empty cells and asked to draw a blue dot in the right-most cell. Since you always start in the left-most cell (the default starting position), you'll need to move before you can draw.

### Methods
The following special methods are available for traversing/transforming the row:
* `moveRight();`
* `moveLeft();`
* `useGreen();`
* `useBlue();`
* `draw();`
* `erase();`
* `onGreen();`
* `onBlue();`

### Example Problem
Write a program which draws a green circle at the end of the row.

``` javascript
    moveRight();
    moveRight();
    moveRight();
    moveRight();
    useGreen();
    draw();
```

This would result in the following transformation:
```
 ['.', '.', '.', '.', '.'] // start row (initial state)
 ['.', '.', '.', '.', 'g'] // end row (end state)
```

- 'b' means a "blue" dot
- 'g' means a "green" dot
- '.' means an empty cell

## Rules
* You must always begin in the left-most cell. This is your default starting position.
* You cannot fall off the board / row. If you try to move past the last cell, you just remain in the same cell.
* You must choose a color before you can draw.
* You do not need to erase before drawing -- you can overwrite a cell's color.

## Goals
* Abstract the problem. Does your solution work for only a specific case, or does it work for all cases?
* "Don't repeat yourself" -- See a lot of repetition in your code? Maybe it's time to refactor.
* Be efficient. How many steps do your instructions take? How does the number of steps compare to the number of cells in the row? (What if the row got longer!?)

## Kyrel Challenges

### Day 1 Challenges -- intro to commands

0. turn_3rd_cell_blue

    start:  ['.', '.', '.', '.', '.']   
    finish: ['.', .', 'b', '.', '.']  

1. erase_3rd_cell

  start:  ['b', 'b', 'b', 'b', 'b']  
  finish: ['b', 'b', '.', 'b', 'b']  

2. every_other_erase

  start:  ['b', 'b', 'b', 'b', 'b']  
  finish: ['b', '.', 'b', '.', 'b']  

3. every_other_blue

  start:  ['g', 'g', 'g', '.', '.']  
  finish: ['g', 'b', 'g', 'b', '.']  

4. move_start_to_finish

  start:  ['b', '.', '.', '.', '.']  
  finish: ['.', '.', '.', '.', 'b']  

  start:  ['g', '.', '.', '.', '.']  
  finish: ['.', '.', '.', '.', 'g']  

  start:  ['.', '.', '.', '.', '.']  
  finish: ['.', '.', '.', '.', '.']  

### Day 2 Challenges -- basic for loops & conditionals

0. all_blue

  start:  ['.', '.', '.', '.', '.']  
  finish: ['b', 'b', 'b', 'b', 'b']  

1. all_first_color

  start:  ['b', '.', '.', '.', '.']  
  finish: ['b', 'b', 'b', 'b', 'b']  

  start:  ['g', '.', '.', '.', '.']  
  finish: ['g', 'g', 'g', 'g', 'g']  

...

### Day 3 Challenges -- advanced loops & conditionals

...
