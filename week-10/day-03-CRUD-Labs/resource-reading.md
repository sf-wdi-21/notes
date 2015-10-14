#$resources, Angular, and the word of CRUD

##What is $resource?
$resource is a 'factory' which creates a resource object that lets you interact with RESTful server-side data sources.

The returned resource object has action methods which provide high-level behaviors (aka CRUD) without the need to interact with the low level $http service.

Using $resource requires the ngResource module to be installed, which is a Bower module. It's as easy as:

```javascript
bower install ng-resource
```

You must have ng-resource added to your dependencies list:

```javascript 
//mainApp is our main module
angular.module('mainApp',['ngResource']); 
```

Usage:

```javascript
var TODO = $resource(url, [paramDefaults], [actions], options);
```

url is the anticipated path where you would like to CRUD methods to be constructed. *This is very much like the Ruby routes resources we have used previously.*

From the actual documentation:
> A parameterized URL template with parameters prefixed by : as in /user/:username. 

**The url you pass in must match existing routes pathing that you have on a backend, such as a Mongo/Express/Node implementation**

###Example:
If you execute this code:

```javascript
var TODO = $resource('/api/entries/:id'); // Note the full endpoint address
});
```

The result of the function call is a resource class object which has the following five methods by default:

```javascript
{ 'get':    {method:'GET'},
  'save':   {method:'POST'},
  'query':  {method:'GET', isArray:true},
  'remove': {method:'DELETE'},
  'delete': {method:'DELETE'} };
```
Calling these methods invoke an $http with the specified http method, destination and parameters. When the data is returned from the server then the object is an instance of the resource class. The actions save, remove and delete are available on it as methods with the $ prefix. This allows you to easily perform CRUD operations (create, read, update, delete) on server-side data like this:

```javascript
var User = $resource('/user/:userId', {userId:'@id'});
var user = User.get({userId:123}, function() {
  user.abc = true;
  user.$save();
});
```

It is important to realize that invoking a $resource object method immediately returns an empty reference (object or array depending on isArray). Once the data is returned from the server the existing reference is populated with the actual data. This is a useful trick since usually the resource is assigned to a model which is then rendered by the view. Having an empty object results in no rendering, once the data arrives from the server then the object is populated with the data and the view automatically re-renders itself showing the new data. This means that in most cases one never has to write a callback function for the action methods.


##Creating a custom 'PUT' request
In this example we create a custom method on our resource to make a PUT request

```javascript
var app = angular.module('app', ['ngResource', 'ngRoute']);

// Some APIs expect a PUT request in the format URL/object/ID
// Here we are creating an 'update' method
app.factory('Notes', ['$resource', function($resource) {
return $resource('/notes/:id', null,
    {
        'update': { method:'PUT' }
    });
}]);

// In our controller we get the ID from the URL using ngRoute and $routeParams
// We pass in $routeParams and our Notes factory along with $scope
app.controller('NotesCtrl', ['$scope', '$routeParams', 'Notes',
                                   function($scope, $routeParams, Notes) {
// First get a note object from the factory
var note = Notes.get({ id:$routeParams.id });
$id = note.id;

// Now call update passing in the ID first then the object you are updating
Notes.update({ id:$id }, note);

// This will PUT /notes/ID with the note object in the request payload
}]);
```



Further Reading:
 - [ME NO WANT READ, ME WANT PRETTY VIDEO!!!](https://www.youtube.com/watch?v=3wnBWj45EK0)
 - [Official Angular Doc](https://docs.angularjs.org/api/ngResource/service/$resource)
 - [SitePoint Crash-Course into $resource CRUD](http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/)
 -  [Comparing $http, $resource, and RESTAngular](http://sauceio.com/index.php/2014/07/angularjs-data-models-http-vs-resource-vs-restangular/)

