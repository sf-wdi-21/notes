**AJAX** -- solutions

### Return of the Movie Search
``` javascript
$.get("http://omdbapi.com/?t=primer", function(response_data){
    console.log("I'm back! Here's your data:")
    console.log(response_data.Plot);
});

// or

$.get("http://omdbapi.com", {t: "primer"}, function(response_data){
    console.log("I'm back! Here's your data:")
    console.log(response_data.Plot);
});

// or the more advanced syntax

$.ajax({
    method: "GET",
    url: "http://omdbapi.com",
    data: {t: "primer"},
    success: function(response_data){
        console.log("I'm back! Here's your data:");
        console.log(response_data.Plot);
    },
    error: function(){
        console.log(":(");
    }
});
```

### Which Comes First
1. Sanity Check: JS is working! // base.js is loading
2. Out here                     // base.js is finished loading
3. Up here                      // the document is ready
4. Down here                    // the ajax request has been sent
5. In here                      // the ajax request is back

### Giphy AJAX Lab
Solutions can be found in the [solutions branch](https://github.com/sf-wdi-21/giffaw/tree/solution)

