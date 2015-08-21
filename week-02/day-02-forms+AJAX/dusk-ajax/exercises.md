**AJAX** -- Exercises

### Return of the Movie Search
Your goal is to figure out how to use the [OMDB API](http://omdbapi.com/#usage) + [jQuery's `get` method](api.jquery.com/jQuery.get/) to request information (JSON) about the movie "Primer". Can you console.log the movie description? HINT: start by hitting the endpoint directly, then figure out how to "drill down" through the json object to get to the data you want.

### Which Comes First?

In what order will the console-logs occur?

``` javascript
console.log("Sanity Check: JS is working!");

$(document).ready(function(){

    console.log("Up here");

    $.get("http://omdbapi.com?t=avatar", function(response_data){
        console.log("In here");
        $("h1").text(response_data.Title);
    });

    console.log("Down here");

});

console.log("Out here")

```

### Giphy AJAX Lab

Your goal is to integrate with the giphy.com API.

Your completed application will display gifs that match user search results.

Please clone: [The Giphy AJAX Lab](https://github.com/sf-wdi-21/giffaw) and follow the instructions in the readme.

---
---
---

## Stretch Challenge (Optional Homework)

Make a music search app using jQuery, AJAX, and the Spotify API. You will be using <a href="https://developer.spotify.com/web-api/search-item" target="_blank">Spotify's search endpoint</a> to search for tracks (songs).

#### Requirements

1. Your app must have a form to search for tracks (songs). The form needs an input field for the search keyword.

2. When a user submits the form, use jQuery to get the search keyword from the form input.

3. Use AJAX to call [Spotify's search endpoint](https://developer.spotify.com/web-api/search-item) with the search keyword from the form.

4. The data you render in the view should include the track name and artist name.

5. Each time the user submits the form, clear the previous search results from the view.

#### How to Get Started

1. Create a new directory and GitHub repo called `spotify_app`.

2. You'll need `index.html`, `style.css`, and `script.js` files. Feel free to copy <a href="https://github.com/sf-wdi-21/blank_template" target="_blank">this starter code</a> to get started.

3. Practice querying [Spotify's search endpoint](https://developer.spotify.com/web-api/search-item) using Postman with a couple different search keywords. You'll want to set `type=track` in your request URL. Look at the response data, and figure out how you would access the track name and artist name for a particular track (this will involve accessing values from nested objects and arrays).

4. Once you feel comfortable with the structure of the response data, work on using AJAX to make the API call to Spotify when the user submits the form.

5. Start by `console.log`-ing the response data. Once you have that working, access the data you need (track name and artist name), and pass it into your Underscore template. Append this data to the view. (**Hint:** You'll need to use `Array#forEach` to iterate through all the tracks Spotify returns in the response data.)

6. Read about [How to Design an API](http://piwik.org/blog/2008/01/how-to-design-an-api-best-practises-concepts-technical-aspects)and try this [YouTube API tutorial](http://www.codecademy.com/en/tracks/youtube) for some extra practice.

#### Stretch Challenges / Bonus

1. Display a track's album artwork next to each track name and artist name in the view. (**Super Bonus:** You'll notice if you try to access the album artwork but none is available, your app will break. Prevent this from happening with a check to see if any artwork is available first.)

2. Spotify gives us a `preview_url` for each track. Create a play button for each track in your view that opens the `preview_url` in a new tab (it will start playing the song!).

3. It would be nice to let the user know something is happening in the few milliseconds between submitting the form and getting data on the page. Show `loading.gif` when the form submits, and hide it when you get data back from Spotify.

4. Handle the case where no data comes back from Spotify. You'll want to let the user know that there are no results, rather than just showing a blank page.
