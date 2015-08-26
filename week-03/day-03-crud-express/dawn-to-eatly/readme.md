#All you can Eatly!
Building a single page todo-style application.

##Learning Objectives

* Sythesize the past few weeks worth of knowledge
* Build a single-page todo-style app

##Instructions

Fork & clone this [app](https://github.com/sf-wdi-21/toEatly)

Follow each one of the below "dashes", mini-sprints. If you get stuch you can checkout to the branch with the complete solution, i.e. `git checkout branch dash-three`.

##Dash One: Set the table

* Install the bower components
* Require jQuery, Underscore, and Bootstrap into your `index.html`
* Require your custom CSS & JS files into your project
* Start your server on port 3000
* Render your `index.html` page on `/`

[Reference lesson](https://github.com/sf-wdi-21/notes/blob/master/week-03/day-01-bootstrap-orm/dawn-bootstrap/readme.md)

##Dash Two: Fast food

* Create an index route that serves up all your data as JSON, `JSON.stringify` should be helpful.
* Create a function `getFoods` that uses AJAX to get hit that endpoint and log the response in the browser's console

[Reference lesson](https://github.com/sf-wdi-21/notes/tree/master/week-02/day-02-forms+AJAX/dusk-ajax)

##Dash Three: Where's the beef?

* Create an emply `ul`, `#food-ul`, for your foods to eventually be templated to
* Create an underscore template that will display each food item's `name` & `yumminess` as a `li`
* In the callback for you AJAX function that get's the food, call on the template and append it to your `#food-ul`
* Finally, on page load call the `getFoods()` function.

[Reference lesson](https://github.com/sf-wdi-21/notes/blob/master/week-02/day-03-jquery-templating/html-templating/readme.md)

##Dash Four: Serve up a new dish

* Create a form so you can add a new food to your list!
* Create a route that will accept this new food item and add it to the list. Don't forget to add an new unique `id` to the new food.
* Finally let's set an event listener on the form so that on submit the default action is prevented and an ajax post request is sent with the form's data.
	* Use `serialize` to format the data in the form
	* On `.done` run the `getFoods()` function again and clear the form.

[Reference lesson](https://github.com/sf-wdi-21/notes/tree/master/week-02/day-02-forms+AJAX/dawn-forms)

##Dash Five: Mise en place

* Create a function called `pageLoad` does everything already being done when the page is loaded. Call it once when the page is loaded.
* Load the foods in reverse order so that the most recent one appears at the top.
* Beautify your page to take advantage of Bootstrap styling!

[Reference lesson](https://github.com/sf-wdi-21/notes/blob/master/week-03/day-01-bootstrap-orm/dawn-bootstrap/readme.md)