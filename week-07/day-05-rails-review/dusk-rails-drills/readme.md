# Rails Review
## Weekend Mini-Lab

### Part 1: Time Trials

| Objective |
| :--- |
| Attempt completing the following functionality within **three** hours with an eventual target time of under **two** hours. Being able to do it once in under **three** hours is not enough. Everyone should do this at least twice to establish some kind of average work time. |

**NOTE**: *Please use a timer to time yourself when working on part 1. You'll be doing part 1 at least twice! Please have your two `best` times recorded and ready to share on Monday, and have notes of questions that came up when doing this process.*

Resources:

* [rails generate](http://guides.rubyonrails.org/command_line.html#rails-generate)
* [rails destroy](http://guides.rubyonrails.org/command_line.html#rails-destroy)
* [wdi 21 github group](https://github.com/sf-wdi-21)

##Setup

* Signup for an Alchemy [API key](http://www.alchemyapi.com/api/register.html). [Alchemy](http://www.alchemyapi.com/) is a speech sentiment analyzer and we will be using it to add sentiment tags to the articles our users will create in this application.
* If you are not clear on how to edit a resource, take a look over this [section](http://guides.rubyonrails.org/getting_started.html#updating-articles) of the rails guides.
* If you are not familiar with any of these gems then research them:
    * [Ffaker](https://github.com/ffaker/ffaker) — creates fake seed data
    * [dotenv](https://github.com/bkeepers/dotenv) — stores ENV variables and obscuring sensitive information from our application
    * [Typhoeus](https://github.com/typhoeus/typhoeus) — makes API requests for us from our backend

Once you feel ready...

**START THE TIMER!**

## Part One: Models

Use the following when constructing a blog. You should not add styling or anything extra during time trials. This is barebones functionality.

* We need 3 models
  * a `user` model with the following attributes
    * `email`, `first_name`, `last_name`, `password_digest`
    * We need authentication in our `user` model, i.e. `User.confirm` and `secure_password`
    * We need simple validations on our user, i.e. a unique `email`, email and password confirmations, and presence for both attributes.
  * an `article` model
    * `title` and `content`
    * simple validations on the title and content for presence
* We need one association
  * 1 to Many: `user` and `article`

##Part Two: Controllers

* We need a `sites` controller with `index`, `about`, and `contact`
* We need a `users` controller with all seven resources
* We need an `articles` controller with all seven resources
* We need a `sessions` controller with at least `new` and `create`.
* We need `session_helper` methods for `login`, `logged_in?`, `logout`, and `current_user`.

##Part Three: Authentication & Authorization

With all of the above `users` should be able to do the following:

* `users` can `sign_up`
* `users` can `login`
* `users` can `logout`
* `users` can view, create, and edit articles once logged in.
* `users` can only `edit`, `update`, and `destroy` their own articles


## Part Four: Partial It Up

Go back through your application and create partials for your nav, all forms and whatever else you deem worth.

## Part Five: Seeding Your Application

Add the `ffaker` gem to your Gemfile and use it in your `db/seeds.rb` file to create fake users and associated articles, here's a [cheatsheet](http://ricostacruz.com/cheatsheets/ffaker.html) for it.

/db/seeds.rb

```ruby
# create 100 users
100.times do

  # build the user params
  user_params = Hash.new
  user_params[:email] = Faker::Internet.email
  user_params[:email_confirmation] = user_params[:email]
  user_params[:password]  = "123456"
  user_params[:password_confirmation] = user_params[:password]
  # save the user
  new_user = User.create(user_params)

  # create 10 articles for each user
  10.times do
    new_article = Article.new
    new_article.title = Faker::HipsterIpsum.words(rand(8)+2).join(" ")
    new_article.content = Faker::HipsterIpsum.paragraphs(1+ rand(4)).join("\n")
    # save the article
    new_article.save
    # associate the article with the user
    new_user.articles.push new_article
  end
  
end

```

## Part Six: Alchemy API

###Setting up Alchemy

* Setup [`dotenv`](https://github.com/bkeepers/dotenv) to store your `API` keys.
* Use [`Typhoeus`](https://github.com/typhoeus/typhoeus) to make an api request from your backend
* Add a method named `get_keywords` to your `article` model. Here's an implementation example:

/models/article.rb

```ruby
class Article < ActiveRecord::Base
  attr_accessor :keywords
  @@alchemy_url ||= ENV["ALCHEMY_URL"]

  def get_keywords
    res = Typhoeus.get(
      @@alchemy_url,
      params: {
        apikey: ENV["ALCHEMY_APIKEY"],
        text: content,
        maxRetrieve: 10,
        outputMode: "json"
      }
    )
    words = JSON.parse(res.body)["keywords"].map { |w| w['text'] }
    @keywords = words.join(" | ")
  end

end
```

###Tagging Articles

* Create a model called `tag` that has a `text` attribute.
* Associate your `article` to your `tag` model so that your `article` has many `tags`.
* Alter your `get_keywords` method to save each keyword as an associated `tag`. If an `article` already has `tags` or has less than 500 characters, it should not make a request to Alchemy's API.

**STOP THE TIMER!**

## Further Research

Time permitting, you may want to do some additional research.

**Users should be able to upload images**

* [paperclip gem](https://github.com/thoughtbot/paperclip)
    * Allows users to upload photos to an amazon bucket linked to your application

* [uploadcare](https://uploadcare.com/)
    * A very easy and clean solution for users to upload photos. Storage is handled for you, but users are limited to uploading 100 photos, otherwise the service is not free.

**User should be able to have tasks performed at a specified date**

* [custom rake tasks](http://guides.rubyonrails.org/command_line.html#custom-rake-tasks) & [whenever task runner](https://github.com/javan/whenever)
    * Rails allows for custom rake tasks which you can run with `whenever`.
    * Note the `whenever` command `rake "my:rake:task"`
* [bower via rails-assets](https://rails-assets.org/)
    * A Rails solution to access the bower community to help manage your application's front-end vendor libraries

