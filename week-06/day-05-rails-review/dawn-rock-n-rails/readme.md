#Rock 'n Rails!

For this morning exercise we're going to be synthesizing all our Rails knowledge to build a record collection!

###User stories

*User should be able to...*

1) See all the records on `records#index`

2) See a single record on `record#show`

3) See a form to create a new record on `record#new`

4) Submit the new record form to `record#create` & be redirected back to record index.

###Models

A `Record` should have the following attributes:

* title — String
* artist — String
* year — Integer
* cover_art — String
* song_count — Integer

###Guidance

**See all the records on `records#index`**

* Generate a new rails application with postgres as your default database:

```bash
rails new RockNRails -d postgresql
```

* Make sure that the postgres application is open! Otherwise the Rails server will not be able to connect to a database.

* Generate a records controller with `index` `show` `new` and `create` actions:

```bash
rails g controller records index show new create
```

* Delete the generated routes and write RESTful routes that map to our records controller.

config/routes.rb

```ruby
get "/records" => "records#index"
get "/records/:id" => "records#show"
get "/records/new" => "records#new"
post "/records" => "records#create" 
```

* Generate a record model with the attributes `title` `artist` `year` `cover_art` and `song_count`

```bash
rails g model record title:string artist:string year:integer cover_art:string song_count:integer
```

* Create a database for your application to use

```bash
rake db:create
```

* Run the migration that was generated to createa a record table in the database.

```bash
rake db:migrate
```

* In `db/seeds.rb` create some records!

db/seeds.rb

```ruby
# Wipe the database
Record.destroy_all
# Let's create a bunch of records
Record.create([
  {
    title: "On Avery Island",
    artist: "Neutral Milk Hotel",
    year: 1996,
    cover_art: "https://en.wikipedia.org/wiki/File:On_avery_island_album_cover.jpg#/media/File:On_avery_island_album_cover.jpg",
    song_count: 12
  },
  {
    title: "Everything All the Time",
    artist: "Band of Horses",
    year: 2006,
    cover_art: "https://upload.wikimedia.org/wikipedia/en/5/51/BandofHorsesEverythingalltheTime.jpg",
    song_count: 10
  },
  {
    title: "The Flying Club Cup",
    artist: "Beirut",
    year: 2007,
    cover_art: "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Flying_Club_Cup.jpg",
    song_count: 13
  }
])
``` 

* Run the seed file!

```bash
rake db:seed
```

* Check that everything was done correctly, run `rails console` or just `rails c` and inside run `Record.all`. Make sure that you can see an array of all the records from your seed file. Exit by typing `exit`.

* Now that we have records in the database, let's render them to the view: `views/records/index.html.erb`

records_controller.rb

```ruby
def index
  @records = Record.all
end
```

views/records/index.html.erb

```html
<h1>Rock 'n Rails!</h1>
<% @records.each do |record| %>
  <p>Title: <%= record.title %></p>
  <p>Artist: <%= record.artist %></p>
  <img src="<%= record.cover_art %>">
<% end %>
```

* Start the server with rails s & head to `localhost:3000/records`

**See a single record on `record#show`**

