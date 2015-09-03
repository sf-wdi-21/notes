# Hitting External APIs (Giphy & Reddit) from Express

We'll be using the node "Request" library to handle external API requests

* Documentation: https://github.com/request/request

Our application goals will be to retrieve:

* What's the top gif on Giphy?
* Is there an AMA on Reddit's front page?

**Pattern to follow:**

- When a user navigates to a route such as `/top_gif` in the browser (FRONTEND to BACKEND)
- The server's route get hit, which triggers an api request to a service's API, such as Giphy (BACKEND to API)
- The request gets back to to our server as JSON (API to BACKEND)
- It gets processed and relayed back to the client as JSON (BACKEND to FRONTEND)

## API Requests w/ Request

Remember AJAX and callbacks in jQuery?

``` js
$.get("http://api.example.com/v1/trending", function(response){
    // code in here!
})
```

Using the "Request" library works the same way:

`npm install request`

``` js
request = require('request');
request.get({uri: "http://www.reddit.com/.json"}, function(err, apiRes, apiBody){
    // code in here!
})
```

## Why not make API calls from the client-side/browser?

- Servers are better for processing / parsing large amounts of data!
    - Caching
        + Why make the same request over and over when you could save the data the first time?
    - Cron Jobs / Tasks
        + Keep your data fresh by scheduling periodic API calls
- Most APIs have rate limits
    + Requests per second / hour / day.
        + Hard to enforce when you have multiple clients!
- Most APIs are sensitive
    + Expose User Data
    + Require an API Key
        + No place to hide it on the frontend! Easy to steal.

- Servers are made for it!

Here's an example app that is making API requests to Reddit and Giphy and will render the results on its own endpoints, relatively `/top_ama` and `/top_gif`. The client can use AJAX from the front-end to git those routes and get data back from Reddit and Giphy!

```javascript
var express = require('express'),
    app = express(),
    request = require('request');

// REDDIT FRONTPAGE AMA EXAMPLE
app.get('/top_ama', function(req, res){

  console.log("Requesting data from reddit...")
  request.get({
    uri: "http://www.reddit.com/.json"
  }, function(err, apiRes, apiBody){
      
      if (err) {
        console.log("Uh oh! Got an error from reddit.")
        res.send("There was an error")
      }

      console.log("Reddit api response is back!")
      var responseData = JSON.parse(apiBody);

      console.log("checking for AMA on the front page...")
      var frontPageHasAMA = responseData.data.children.some(function(item){
        return item.data.subreddit === "IAmA";
      });

      if (frontPageHasAMA) {
        console.log("Found one!")
        res.send("Yay! There's an AMA on the front page of <a href='http://www.reddit.com'>reddit</a> today! :)")
      } else {
        console.log("Nope, nothing!")
        res.send("Sorry! No AMA today... :(");
      }
      
  })

})

// GIPHY TOP GIF EXAMPLE
app.get('/top_gif', function(req, res){
  
  console.log("Requesting data from giphy...")
  request.get({
    uri: "http://api.giphy.com/v1/gifs/trending",
    qs: {
      limit: 1,
      api_key: "dc6zaTOxFJmzC"
    }
  }, function(err, apiRes, apiBody){
    
      if (err) {
        console.log("Uh oh! Got an error from reddit.")
        res.send("There was an error")
      }

      console.log("Giphy api response is back!")
      var body = JSON.parse(apiRes.body)

      console.log("Grabbing the top trending gif")
      res.send("<img src='" + body.data[0].images.original.url + "'>");

  })

})

// HOME PAGE
app.get('/',function(req,res){
  res.send(
    "<h1>Backend API integrations are fun!</h1>" +
    "<a href='/top_gif'>What's the top gif on Giphy?</a> | " +
    "<a href='/top_ama'>Is there an AMA on Reddit's front page?</a>"
  );
})

app.listen(3000);
```