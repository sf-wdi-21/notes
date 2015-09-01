# Cookies & Sessions

| Objectives |
| :---- |
| Review the request and response cycle and the stateless web |
| Discuss and use an HTTP Cookie in a web application |
| Differentiate between an HTTP Cookie and a session |

## What's a cookie?
An HTTP cookie is a [small piece of data](http://stackoverflow.com/questions/4100324/how-many-characters-can-be-stored-in-4kb) sent from a website and stored in a user's web browser. Every time the user loads the website, the browser sends the cookie back to the server in the HTTP Request Header. Cookies are commonly used to track whether a user is logged in or not. They can also be used to record user preferences.

![cookie-monster](http://media0.giphy.com/media/EKUvB9uFnm2Xe/giphy.gif)

Our goal today is to harness the power of cookies. First, to track users to our website. And secondly, to track their login "session".

## Reading and Writing Cookies -- Server Side

**Writing Cookies**:
```javascript

var express = require("express");
var app = express();

app.get("/", function (req, res) {

  // write the HTTP Cookie to the Response Header
  res.set({
    "Set-Cookie": "message=hello"
  });
  
  res.send("Hello World");
});

app.listen(3000, function () {
  console.log("UP AND RUNNING");
});

```

**Reading Cookies** (from inside any route):
``` javascript
// read the HTTP Cookie from Request Header
var cookieStr = req.get("Cookie"); 
```

#### Using `cookie-parser`
In practice we'll use `cookie-parser` middleware to so that we don't have to deal with string manipulation, and can just manipulate an object of key-value pairs. (We did the same thing with `body-parser` middleware).

First we have to install `cookie-parser`:
```bash
npm install --save cookie-parser
```
And now we just tell our app to use `cookie-parser`.

```javascript
var express      = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

```

Altogether that looks like:

```javascript

var express      = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get("/", function (req, res) {
  console.log(req.cookie.message); // "hello"
  res.cookie("message", "hello again"); // overwrite
  res.send("Hello World");
});

app.listen(3000, function () {
  console.log("UP AND RUNNING");
});
```

**HTTP Response Header**

This sends a response that looks something like the following:

```
HTTP/1.1 200 OK
X-Powered-By: Express
Set-Cookie: message=hello%20again
Content-Type: text/html; charset=utf-8
Content-Length: 11
ETag: W/"b-4a17b156"
Date: Mon, 18 May 2015 07:36:50 GMT
Connection: keep-alive

Hello World
```

The Cookie is then saved to the browser for localhost:3000. You can view it in the Chrome Developer Console under the "resources" tab. [Try this](https://developers.google.com/web/tools/iterate/manage-data/cookies?hl=en).

Once the cookie is set in the browser, any subsequent request to the website automatically has the following line in the HTTP Request Header:

```
...
  cookie: 'message=hello',
...
```

## Reading and Writing Cookies -- Client Side
It's also possible to manipulate cookies on the client-side.

From the Chrome Developer Console:
``` javascript
document.cookie; // "message=hello"
```

You can write to this string simply by reassigning its value. Take care though that you don't overwrite anything important (and watch out for spaces and semi-colons)!

``` javascript
document.cookie += "; magic_number=10;"
document.cookie; // "message=hello; magic_humber=10;"
```

Try it out! Open your Console, and see what cookies are set in your browser. Try it out on a few different websites.

* Can you create a new cookie.
* Can you overwrite an existing cookie.
* Can you add a key-value pair to an existing cookie.
* Can you log yourself out of a website by deleting your cookie (and refreshing the page)?

For more on this approach, take a look at [Quirksmode on Cookies](http://www.quirksmode.org/js/cookies.html).

**Additional reading:**
* [Cookies in the Chrome Console](https://developers.google.com/web/tools/iterate/manage-data/cookies?hl=en)
* [HTTP Intro](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
* [An Introduction to Cookies](http://code.tutsplus.com/tutorials/an-introduction-to-cookies--net-12482) (php/javascript)
