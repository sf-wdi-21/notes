##Weekend Homework
**Want to review?** Try adding MongoDB to this [Todo App Lab](https://github.com/sf-wdi-21/mongo_todo_refactor). And check out the [solution](https://github.com/sf-wdi-21/mongo_todo_refactor/tree/solution)!

Make sure to also check out the solution to the [Bite Me Mongo/Express Lab](https://github.com/sf-wdi-21/bite_me_mongo_express/tree/solution).


## CatchPhrase.ly

Let's build an app for **Catchphrase**!

If you forget, Catchphrase is played to help remember words' definitions. To play we need a list of `phrases` which have a `word` and a `definition`. For example: `word: "HTTP", definition: "part of the application layer of Internet protocol suite that is used to transfer media across the world wide web"`

The lab will be a review of what we've done this past week. It is broken down into several sprints outlined below.

##Tips

Start simple. Stub out data. Build your CRUD routes. After you get that working, you can worry about adding MongoDB and implimenting any bonuses.

## Sprints

#### Getting Started
* Create a project folder and make sure to do all the normal setup (git, npm, etc):
* Don't forget to install application (like `express`!) dependencies using npm.
* Create an `index.js` file in your project folder and create a miminal application.
    * Require the express library.
    * Create a single route for your homepage.
    * Specify the port your server listens on.
* Run your server using node or nodemon.
    * Visit e.g. "localhost:3000/" in your browser.

**Don't forget**

* Hard code some data so you can get up and running quickly.
    * When you start using mongoDB, try using a `seed` file to make populating & reseting your database easier.
* Serve up your static assets in a public directory (javascript, stylesheets, images).
* Use bower to require third-party libraries and serve them up in a vendor directory
* Use AJAX to GET json data from your endpoints
* Make life easier on yourself with underscore templating.
* When in doubt: run your node REPL and play around with your data.
* And make sure your routes perform CRUD action on the database that follows a RESTful convention

###Sprint One (GET index)

**A user can...**
* see a JSON object containing phrases when they visit the "/phrases" endpoint.
* see a very simple homepage when they visit "/".
* see a rough list of **ALL** `phrases` on the home page (each with a `word` and a `definition`).

###Sprint Two (Create/Destroy)

**A user can...**

* **create a new phrase** by submitting a `form`
    * The DOM should update state accordingly
    * The phrase should persist with a page refresh

* **delete a phrase** by clicking a `button`
    * See the phrase disappear from the page
        * the phrase with the corresponding "_id" should be removed from the database.
        * Make sure to send confirmation that the deletion was successful!
    * NOTE: forms cannot use the DELETE method. Forms can only GET and POST. You will need to work around this by using `AJAX` (or you can use the `method-override` library).

* All **data should persist**, even if the page refreshes or the server restarts.
   
##Sprint Three (Update)

You *must* have routes for **Reading, Creating, and Deleting** before continuing.

* A user can **update a phrase**'s `description`.
    - make changes
    - save their changes
    - see confirmation that the phrase saved successfully.


##Bonuses

* A user can "drill" themselves on phrases/definitions.
    * Definitions are hidden until the user clicks on them.
    * The phrases can be shuffled.
    * A user can grade themselves, giving a phrase a "thumbs up" or "down" depending on their answer.
        * A user can see their score, or a list of words they need to review.
