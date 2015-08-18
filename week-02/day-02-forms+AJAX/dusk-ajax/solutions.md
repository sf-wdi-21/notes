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


### Giphy AJAX Lab
Solutions can be found in the [solutions branch](https://github.com/sf-wdi-21/giffaw/tree/basic_solution)

