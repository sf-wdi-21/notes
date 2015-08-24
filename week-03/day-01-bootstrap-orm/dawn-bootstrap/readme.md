#Front-end Productivity w/ Bootstrap & Bower

###Learning Objectives

* Use Bower to require Bootstrap in your project
* Understand and implement a grid system
* Design html pages with the aid of bootstrap & mockups

##What is Bootstrap?

Created by Twitter, [Bootstrap](http://getbootstrap.com/) is a collection of CSS classes and JavaScript functions that enable us build sleek & stylish websites quickly.

##Bower can make our life easier

Bower is a tool that helps us find, download, and manage the numerous JavaScript & CSS libraries you frequently use in your HTML. 

jQuery, Underscore, Bootstrap, are examples of libraries we may want to add to our project. It can be a hassle to find the source code for each one to link them to our HTML page. Instead let's use **Bower**, a library management tool, to bring them to us!

###Installing Bower

You'll only need to do this once: install bower with...

```bash
npm install -g bower
```

*Note: as we installed it globally with `-g` we can now run `bower` from anywhere in our computer.*

Let's make a directory, `funWithBootstrap` and inside create an `index.html`. Here's some starter code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Title</title>
  <meta charset="utf-8" />
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" type="text/css" href="#">
</head>
<body>
  
</body>
</html>
```

###Using Bower

Now let's include a few libraries in our HTML file: jQuery, Underscore, and Bootstrap. Inside of `funWithBootstrap`, run:

```bash
bower install jquery underscore bootstrap
```

*Note: we can install multiple files at once by separating their names with spaces, nifty!*

####What just happened?

You'll notice you now have a `bower_compents` directory, which inside you'll find a directory for jQuery, Underscore, and Bootstrap.

Inside of each of these folders you'll see a bunch of files. Don't worry. The file with the name of the library is probably the main one. For example, `bower_components/underscore/underscore.js` is the only file you'll use for Underscore. For the other libraries, you may need to look inside a `dist` (for distribution) directory to find `jquery.js`.

####Bootstrap files

Bootstrap comes with CSS, JavaScript, and theme files. The [CSS library](http://getbootstrap.com/css/) gives you access to its main set of classes. The [JavaScript library](http://getbootstrap.com/javascript/) gives you access to its "components" (i.e. navbars, galleries, etc). The theme CSS file gives you additional classes. You can look elsewhere for additional themes (Hint: Google it.).

####Why does Bower give me so many files?
The core library (e.g. `underscore.js`) is actually getting a lot of its logic from other files. Additionally, there might be assets or even optional components you can include which aren't core to the library.

####What's this `.min` thing?
`.min` before the file extension, such as `.min.css` or `.min.js` just signals that all the whitespace has been taken out of the file and the variables have been renamed to be as short as possible. This is called **minification**. It is a very bad idea to try to read a minified file. Instead, those files are only used in production when you want your libraries to be shortened.

###Requiring the Libraries

Now we would like to have our html file link to jQuery, Underscore, and most importantly, Bootstrap!

###CHALLENGE: Require the libraries

From your `index.html`, import jQuery, Underscore, Bootstrap (the CSS, JavaScript, and theme files) into your projects. Let's use the non-minified versions of the files for now.

Tip: Chances are you'll spell something in the path incorrectly, so check your Chrome console for an error message saying it didn't find the file with that path. Fix the path referencing the file, clear your errors (with ctrl+L), and refresh the page to make sure there are no more new errors.

Tip: You can find a solution below.


##Using Bootstrap

###A Grid System

A grid enables you to layout your HTML in a structured manner.

The majority of websites use some sort of grid-system. Bootstrap comes with a grid-system, but it's easy to create your own.

**How would we use one?**

All your content will live inside a column, which in turn exists inside a row. Columns are typically broken up into a fraction of twelve (as it's a very divisible number). 

Below illustrates a generic (non-bootstrap) twelve-column grid-system; the orange marks represent rows. We give each element a class (i.e. `.column-12`) to tell it how many columns to take up.

You can see the top row has an element inside of it that takes up all twelve columns, while the bottom row has two elements inside of it that each take up six columns.

![grid](imgs/grid.png)

**How could we build it?** 

Given we want to build a 12-column grid system, we would have to consider 12 of 12 columns to equal 100% of the page, 6 of 12 columns 50%, 4 of 12 33.3%, etc. Here's an example implementation below.

```css
.column-12 {
    width: 100%;
}

.column-11 {
    width: 91.53;
}

.column-10 {
    width: 83.07%;
}

.column-9 {
    width: 74.6%;
}

.column-8 {
    width: 66.13%;
}

.column-7 {
    width: 57.67%;
}

.column-6 {
    width: 49.2%;
}

.column-5 {
    width: 40.73%;
}

.column-4 {
    width: 32.27%;
}

...
```

###CHALLENGE: Grids

What percentage would you have to make the width for a div that took up 3 columns (.column-3)? How about 2 & 1 (.column-2, .column-1)?

###Responsiveness

Bootstrap's grid system is very similar to what we have just implemented except one thing: It is also *responsive*.

Websites that are designed responsively adjust to different screen sizes. Media queries and percentages are key to designing responsive sites, and that's just how Bootstrap does it!

When telling an HTML element how many columns it should take up, we also tell it at what screen size to do so. For example, if I wanted an element to be full screen at a small screen size, but half screen at a large screen size, I could give it the two Bootstrap classes `.col-sm-12` & `.col-lg-6`. Under the hood bootstrap leverages media queries in each of these classes to apply to different screen sizes. Here a list of the default screen size options. 

* col-xs-* =< 768px (e.g. smartphones)
* col-sm-* =< 992px (e.g. tablets)
* col-md-* =< 1200px (e.g. laptops, desktops)
* col-lg-* >= 1200px (e.g. large desktops, smart TVs)

##Mockups (in-class)

We'll be coding up a few mockups using Bootstrap. Fork and clone [this repo](https://github.com/sf-wdi-21/bootstrap_mockups) to get started.

<hr>
<hr>
##Solutions

###Require the libraries

Once you import jQuery, Underscore, and Bootstrap, the resulting html file should look similar to the following (Remember: Order matters!):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Title</title>
  <meta charset="utf-8" />
  <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- underscore -->
  <script type="text/javascript" src="bower_components/underscore/underscore.js"></script>
  <!-- jquery -->
  <script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
  <!-- boostrap js -->
  <script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
  <!-- boostrap css -->
  <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.css">
  <!-- boostrap css theme (optional) -->
  <link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap-theme.css">
</head>
<body>
  
</body>
</html>
```

###Grids

```
.column-3 {
    width: 23.8%;
}

.column-2 {
    width: 15.33%;
}

.column-1 {
    width: 6.87%;
}
```
