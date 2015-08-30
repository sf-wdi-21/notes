# Intro to Web Frameworks: Express.js
## Middleware, Static Files, and Assets

| Objectives |
| :---- |
| Review and discuss routing parameters |
| Explain and apply basic middleware for express |
| Apply static file serving for views and assets |



### Outline

* Review routing params
* Introduce views
    * Sendfile
* Using forms
* Handling form posts



### Setting Up

``` bash
mkdir burger_app/
cd burger_app
touch index.js
npm init
npm install --save express 
```

### Routing Params


Let's build a `burgers` application. Let's start by creating a root route.



``` javascript
var express = require("express"),
    app = express();


// the root route
app.get("/", function (req, res) {
    var text = "View all burgers at " +
                "<a href='/burgers'>/burgers</a>";
    res.send(text);
});

app.listen(3000, function () {
    console.log("GO TO localhost:3000");
});

```


When you click the link after starting the server you should get an error. Now, let's add a route to view all burgers.


``` javascript
var express = require("express"),
    app = express();

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

// the root route
app.get("/", function (req, res) {
    var text = "View all burgers at " +
                "<a href='/burgers'>/burgers</a>";
    res.send(text);
});

app.get("/burgers", function (req, res) {
    var burgersText = burgers.join(", ");
    res.send(burgersText);
});

app.listen(3000, function () {
    console.log("GO TO localhost:3000");
});

```

It is terrible that we are not sending properly formatted HTML responses, and we should build those up, but let's ignore that for now. We don't want to clutter our application right now with string concatenations.

### Sending A File

Sometimes there is a pretty static HTML file you want to send as a response. There are ways to send files using Express -- `res.sendFile`.


Let's first create the file we want to send.

``` bash
mkdir views
touch views/contact.html
```

Then let's put some contact info in our `contact.html`.

`views/contact.html`

``` html
<!DOCTYPE html>
<html>
    <head>
        <title>CONTACT</title>
    </head>
    <body>
    1234567
    </body>
</html>

```

In order to send this file we will need to use `res.sendFile`, which is a utility built into Express to help us send files. Next, we want to be able to specify, which file we want to send, `./views/contact.html`. In order to build up the `path` to this file we are going to use a built in Node utility called `path`.

> **path** is  just a utility built into node to help us **correctly** concat file paths
> 
> ``` javascript
> var path = require("path");
>
> path.join("Documents/", "/Homework");
> // => "Documents/Homework"
>
 ```



Let's add the following lines to our application somewhere near the top. Then let's make a `views` variable to hold a string that references the `./views` directory. *Note that the `./` means **current working directory***.
 
``` javascript
var path = require("path");
// define the ./views directory as a variable
var views = path.join(process.cwd(), "views");
```


Then let's add a route to handle grabbing the `contact.html` file from the `./views` directory.

``` javascript
...

app.get("/contact", function (req, res) {
    // helps go to ./views/contact.html
    var contactPath = path.join(views, "contact.html");
    res.sendFile(contactPath);
});
```


In total we should have the following:

``` javascript
var express = require("express"),
    app = express();

var path = require("path");
// define the ./views directory as a variable
var views = path.join(process.cwd(), "views");


var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

// the root route
app.get("/", function (req, res) {
    var text = "View all burgers at " +
                "<a href='/burgers'>/burgers</a>";
    res.send(text);
});

app.get("/burgers", function (req, res) {
    var burgersText = burgers.join(", ");
    res.send(burgersText);
});

app.get("/contact", function (req, res) {
    // helps grab ./views/contact.html
    var contactPath = path.join(views, "contact.html");
    console.log(contactPath)
    res.sendFile(contactPath);
});

app.listen(3000, function () {
    console.log("GO TO localhost:3000");
});
```


---

## Accepting Form Data

Let's make a `form` on our page to help us submit `burger` data to the server. Make a form that looks like the following on our `home.html`.

`/views/home.html`

``` html
<form action="/burgers" method="POST">
    <button>SEND REQUEST</button>
</form>

```

If we click this button we should get an error because we don't have a route to handle a `post` to `/burgers`.

``` javascript
app.post("/burgers", function (req, res) {
    res.send("BURGER POST RECEIVED!");
});
```

Now when we click our button we should see `"BURGER POST RECEIVED!"`. Now we aren't actually creating anything yet. To create something we'll need to actually add inputs fields into our `form`.

``` html
<form action="/burgers" method="POST">
    <input type="text" name="burger[name]" placeholder="what's your burger?">
    <button>SEND REQUEST</button>
</form>
```

When we submit this form we'll want to access the data being sent. There is only one problem... **data sent in the form is not a url or route param** so we can't access it using **req.query** or **req.params**. In fact, our app can't even process form data without a library to help us.


----

### Middleware


Let's install our first middleware. It's called `body-parser` and it will parse the body of a request being sent to us by the browser when a form is submitted.


``` javascript
npm install --save body-parser
```

Now we need to integrate it into the application. 

``` javascript
...
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

```

The `app.use` statement is telling our application to literally use the `body-parser` library before it moves onto route the request.

Now that we have the above setup we can update our `app.post("/burgers", ...)` route to use the `body` params submitted by the form.

``` javascript
app.post("/burgers", function (req, res) {
    var burger = req.body.burger;
    res.send("Nice " + burger.name);
});
```


All together we should have something like the following:


``` javascript
var express = require("express"),
    app = express();


var path = require("path");
// define the ./views directory as a variable
var views = path.join(process.cwd(), "views");

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

// the root route
app.get("/", function (req, res) {
    var text = "View all burgers at " +
                "<a href='/burgers'>/burgers</a>";
    res.send(text);
});

app.get("/burgers", function (req, res) {
    var burgersText = burgers.join(", ");
    res.send(burgersText);
});

app.get("/contact", function (req, res) {
    // helps grab ./views/contact.html
    var contactPath = path.join(views, "contact.html");
    console.log(contactPath)
    res.sendFile(contactPath);
});

app.get("/home", function (req, res) {
    var homePath = path.join(views, "home.html");
    res.sendFile(homePath);
});

app.post("/burgers", function (req, res) {
    var burger = req.body.burger;
    res.send("Nice " + burger.name);
});

app.listen(3000, function () {
    console.log("GO TO localhost:3000");
});
```

-----

### Adding Burgers

Instead of just responding with `Nice ...` let's actually add a burger to our list of burgers.

``` javascript
app.post("/burgers", function (req, res) {
    var burger = req.body.burger;
    burgers.push(burger.name);
    res.send("Nice " + burger.name);
});

``` 

That's pretty good! We can also send back a url where they can view their new burger.


``` javascript
app.post("/burgers", function (req, res) {
    var burger = req.body.burger;
    burgers.push(burger.name);
    res.send("See all burgers at localhost:3000/burgers");
});

```

Even better we could use something called a `redirect` to just send their browser there.

``` javascript
app.post("/burgers", function (req, res) {
    var burger = req.body.burger;
    burgers.push(burger.name);
    res.redirect("/burgers");
});
```

## Adding Static Assets

With our Express application we want to be able to serve assets **javascripts**, **stylesheets**, and **images**. By convention we generally put all these into a `public/` directory in our project.

``` javascript
app.use(express.static("public"))
```

Now we can make subfolders in our `public` folder for our assets.


``` bash
mkdir public/javascripts
mkdir public/stylesheets
mkdir public/images

touch public/stylesheets/app.css
```


Inside of our `app.css` we can add some style for the body of our app.

``` css
body {
    background-color: red;
    color: white;
}
```


Then we just add a `link` tag in our `home.html` or other `view` files.


``` html
<!DOCTYPE html>
<html>
    <head>
        <title>HOME</title>
    </head>
    <body>
    <form action="/burgers" method="POST">
        <input type="text" name="burger[name]" placeholder="what's your burger?">
        <button>SEND REQUEST</button>
    </form>
    </body>
</html>

```

### Adding Bower

If you still want to use `bower_components` you'll need to tell express to serve assets in the `bower_components` folder. Add the following line to your `index.js`.


``` javascript
app.use(express.static("bower_components"));

```
