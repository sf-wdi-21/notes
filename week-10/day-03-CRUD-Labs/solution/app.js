angular.module('pokemonApp', ['ngResource'])

.controller('PokemonsCtrl', ['$scope', 'Pokemon', function ($scope, Pokemon) {
    $scope.pokemon = {};
    $scope.pokemons = [];
    $scope.newPokemon = {};

    $scope.pokemons = Pokemon.query(); // returns all the pokemons

    $scope.createPokemon = function(){
        Pokemon.save($scope.newPokemon);
        $scope.newPokemon = {}; // clear new pokemon object
    };

    $scope.updatePokemon = function(pokemon) {
        console.log(pokemon.ndex)
        Pokemon.get({id: pokemon.ndex }, function() {
            Pokemon.update({id: pokemon.ndex}, pokemon);
            pokemon.editForm = false;
        });
    };

    $scope.deletePokemon = function(pokemon) {
        Pokemon.remove({id:pokemon.ndex});
        var pokemonIndex = $scope.pokemons.indexOf(pokemon);
        $scope.pokemons.splice(pokemonIndex, 1);
    };

}])

.service('Pokemon', ['$resource', function ($resource) {
    return $resource('https://pokemon-api.herokuapp.com/pokemons/:ndex?api_key=WDI18RULES', { id: '@_id'}, {
      update: {
        method: 'PUT'
      }
  });
}]);
