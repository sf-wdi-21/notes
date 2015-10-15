#Angular Resource
Built on the top of the $http service, Angular’s $resource is a service that lets you interact with RESTful backends easily. $resource is very similar to models in Rails. In this tutorial, we're going to make use of a pokemon API that can be found here: https://pokemon-api.herokuapp.com/pokemons/?api_key=WDI18RULES. The request syntax of the pokemons API follows a similar pattern as the wine API that you used yesterday, however Pokemon are accessed via the `ndex` number, not the `id`. Here is an example of a simple request to see Bulbasaur: [https://pokemon-api.herokuapp.com/pokemons/001?api_key=WDI18RULES
](https://pokemon-api.herokuapp.com/pokemons/001?api_key=WDI18RULES
)

##Installation

1. Create a new angular app and controller.
2. The $resource service doesn’t come bundled with the main Angular script. Add it to your index.html file.

```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular-resource.min.js"></script>
```
3. Now you need to load the $resource module into your application.

```javascript
angular.module('app', ['ngResource']);
```

##Interacting with the API

1. To use $resource inside your controller/service you need to declare a dependency on $resource. 
2. The next step is calling the $resource() function with your REST endpoint, as shown in the following example. This function call returns a $resource class representation which can be used to interact with the REST backend. Create a services.js file and put your new $resource service in it.

```javascript
angular.module('myApp').service('Pokemon', function($resource) {
  return $resource('https://pokemon-api.herokuapp.com/pokemons/?api_key=WDI18RULES');
});
```
2. The result of the function call is a resource class object which has the following five methods by default: get(), query(), save(), remove(), delete() (delete is an alias for remove)

3. Let’s see how we can use the get(), query(), save(), and delete() methods in a controller:

```javascript
angular.module('myApp').controller('ResourceController',function($scope, Pokemon) {
    $scope.pokemon = Pokemon.get({ id: 200 }, function(data) {
      console.log(data);
    }); // get() returns a single pokemon

    $scope.allPokemons = Pokemon.query(function(data) {
      console.log(data);
    }); //query() returns all the pokemons

    // add a new pokemon
    $scope.newPokemon = {"name":"Studentsaur","kind":"Human","image":"","ndex":"178"};

    Pokemon.save($scope.newPokemon, function(data) {
      console.log(data);
    });

    // delete a pokemon
    Pokemon.delete({id:178});
});
```
The get() function in the above snippet issues a GET request to /pokemons/:id.

The function query() issues a GET request to /api/entries (notice there is no :id).

The save() function issues a POST request to /api/entries with the first argument as the post body. The second argument is a callback which is called when the data is saved.

4. We have explored the create, read and delete parts of CRUD. The only thing left is update. To support an update operation we need to modify our custom factory Pokemon as shown below.

```javascript
angular.module('myApp').factory('Pokemon', function($resource) {
  return $resource('https://pokemon-api.herokuapp.com/pokemons/:ndex?api_key=WDI18RULES', { id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  });
});
```

Now we can use the update function like this:

```javascript
var pokemon = Pokemon.get({ id: 200 }, function() {
    pokemon.name = "Updated Name";
    Pokemon.update({id: 200}, pokemon)
});
```

##Base Challenges

We're going to build a CRUD app like the $http one we built yesterday but using $resource.

1. Display all the pokemons with all their attributes including the photo.
2. Create a form to add a new pokemon. Make it work!
3. Add an edit button next to each pokemon. Make it work!
4. Add a delete button next to each pokemon. Make it work!

##Stretch Challenges

Link the name of each pokemon to a view that shows only the details for that pokemon. Hints:

 - Use ngRoute and ng-view to set up multiple views in your Angular app.
 - Use $routeParams to figure out which pokemon to display.
 - Your view for a single pokemon will have a different controller than your view that displays all pokemons.

Add a filter (client side search) to your app. See docs here: https://docs.angularjs.org/api/ng/filter/filter
