#Angular $http & Resources

| Learning Objectives |
| :--- |
| Fetch data with Angular's `$http` object from an API |
| Create an index & show page for a resource with `ngRoute` |
| Create & destroy resources with `$http` |
| Refactor with a service factory |

##$http 101

[$http](https://docs.angularjs.org/api/ng/service/$http) is a core Angular service that facilitates communication with remote HTTP servers via the browser's XMLHttpRequest object or via JSONP. It is very similar to jQuery's $.ajax function.

###For example

```js
// app.js
var app = angular.module('exampleApp', []);
app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  // run on page load
  $http.get('/wines').then(function(response) {
    //pass response to view
    $scope.wines = response.data;
  });
  // allow the view to execute the function later
  $scope.createWine = function() {
    $http.post('/wines').then(function(response) {
        // do something on success
    });
  };
}]);
```

Read more about the available shortcut methods in the [$http docs](https://docs.angularjs.org/api/ng/service/$http/#shortcut-methods).

##Challenges

####Setup

We'll be referencing this [repo](https://github.com/sf-wdi-21/ng-http-resources) and using a RESTful `wine` API located at `http://daretodiscover.herokuapp.com/wines` to get started.

In the root of the repo, run the command `python -m SimpleHTTPServer` to serve the folder over http. This is necessary for making AJAX requests without running into CORS issues.

The repo contains numbered branches as solutions that map to each of the below challenges.

*Note: If you make changes to the site and they don't show up, try hitting `cmd` + `r` twice in a row, quickly to refresh your cache.*

####Routes, Index, and Show pages

* Initialize routes so that they reference the correct templates and controllers.

* Grab the data with `$http` from the API and display it on the page with bootstrap.

* Combine knowledge of `ngRoute` and `$http` to create a show page that each wine on the index page links to.
  * Use `$routeParams` to figure out the id of the wine to display.
  * The show view will have a different controller the index view.

####Create & Destroy

Make a form to submit a new wine. Add a delete button next to each wine that destroys it.

####Refactor with a [Factory](https://docs.angularjs.org/guide/services#creating-services) & [`ngResource`](https://docs.angularjs.org/api/ngResource)

Use the `$resource` object to build a service factory that interacts with a RESTful wine API.
