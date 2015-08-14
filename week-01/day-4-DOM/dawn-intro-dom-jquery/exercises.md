# jQuery & DOM Exercises

#### Nature Drawing 101: Draw a Tree!
1. Draw the structure of the sf-wdi-21 github repository
2. Draw the struture of the following HTML document:

``` html
<!DOCTYPE html>
<html>
  <head>
    <title>My Site</title>
  </head>
  <body>
    <header>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </header>
    
    <section>  
      <h1>Welcome to my site!</h1>
      <img src="/static/say_cheese.jpg">
      <p>Words and <a href="/">links</a></p>
    </section>

    <footer>
      <small>Copyright 2015 Jon Doe.</small>
    </footer>
  </body>
</html>
```

* How many children does `header` have?
* Name a direct child of the `p` element.
* Name a direct parent of the `p` element
* What is the parent of the `html` element?

#### CSS Selector Challenge
Please refer to [this google doc](https://docs.google.com/document/d/1sKbuZaSio1o65iRdkNpB03pwJfJj98GPHUJQsoKJmE4/edit?usp=sharing).

For each page, come up with as many CSS Selectors as you can think of to select the html elments in **red**, and *only* the elements in red.

#### jQuery Selector Challenge

Use jquery to select the element containing the words "Hello There" with as many different selectors as you can think of:

``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Ex 1</title>
</head>
<body>
   <div id="greeting">Hello There</div>
</body>
</html>
```

1. How would you *get* the value "Hello There"?
2. How would you change (or *set*) the value to "Hola"?
3. How would you add an h1 to the page that says "A Spanish Greeting"?
4. How would you add a second greeting ("Que tal?"), below the first?
5. How would you add the class "blue" to both greetings?

#### Indiana Jones And the Temple of DOM

Go to the [General Assembly homepage](https://generalassemb.ly/) and open your Chrome Developer Console.

1. Grab the huge text splashed across the front page.
    * Get its current text.
        * Change it to "Indiana Jones and the Temple of DOM"
    * Add a `small` tag containing the text "(Rated G)" at the end of the line.
1. Turn the big red button blue.
1. Change the background of the first section heading to yellow.
1. Make the GA icon 100 pixels tall.
1. Grab the first big image on the right (the one with the red-cushioned chair).
    * Get its current image src. (image url)
    * Swap it for this GIF of [Indiana Jones](http://media2.giphy.com/media/MS0fQBmGGMaRy/giphy.gif).
1. Change the text of *only* the first paragraph to: "Snakes. Why did it have to be snakes?"
    * Now, change the text of *every* paragraph to the same quote.

1. Bonus: Combine all your code into a single function called `changeAllTheThings`. When you call the function, it should make all your changes to the page.
