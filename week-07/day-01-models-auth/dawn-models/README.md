# Migrations & Validations

## Schema Migrations in Rails
| Objective                                                                     |  
| :-------------------                                                          |  
| Explore the concept of a database migration |  
| Create a migration that adds a column to a table |  
| Create a migration that updates a column name in a table |  
| Understand how to apply and reverse migrations |  

## Vocab

**Relational Database**

A relational database is one designed to efficiently query and structure relationships between data. The data is typically structured into tables with columns and rows. *Think SQL when you think Relational Database.*

**MVC - Model View Controller**

Rails is organized using an organizing principle known as MVC or Model View Controller.

* Model - Ruby Classes that inherit from the `ActiveRecord::Base` ORM and can talk to the SQL Database.
    *  Models should be "fat".
* View - HTML files, partials, and HTML templates (erb files). The view layer is considered the "presentation" layer and is secondary-to/distinct-from the data/model used to render it.
    * Views should never talk directly to the database (seperation of concerns).
* Controller - The glue between the model and the view. Controllers coordinate between routes, models, and views, so that the the correct data is queried to render the page requested by the client.
    * Controllers should be "skinny".

**Model**

A model in Rails is a Ruby Class that inherits from the Active Record ORM. Each model is mapped to database table (or multiple tables). Models give us a convenient interface for performing database CRUD operations like _create_, _update_, _destroy_, and querying operations like _find_ and _where_.

**Object Relational Mapper (ORM)**

An ORM is a an abstraction layer between our Relational Database and our "Object Oriented" Application. The role of the ORM is to map objects (classes/models/instances) to individual entries (table rows) in our database. This means we can use a high-level language, like Javascript or Ruby, to create and manipulate our data, instead of writing queries in raw SQL (a "Domain Specific Langauge"). Read more [here](http://stackoverflow.com/questions/1279613/what-is-an-orm-and-where-can-i-learn-more-about-it).

**Schema**

You can think of your database schema as a "living document", reflecting the current configuration (e.g. tables, columns, and data constraints) of the tables in your database. You generally DO NOT EDIT your schema file directly -- instead you create a new "migration" to handle the changes for you.

**Migration** a.k.a ‘schema evolution’ or ‘mutation’

Migrations provide us with a mechanism for changing/evolving our database schema over time, as well as a controlled way to "undo" or "roll back" those changes. Each migration represents an historical/incrimental change to our database schema (you can think of it like a git commit). Examples of migrations are creating, deleting and altering tables (and their existing columns). Before you can start manipulating your models, you *MUST* create and run a migration. QUESTION: Why didn't we use migrations in Mongo?


---

####Why do we need the ActiveRecord ORM?
It's convenient!

**Would you rather...**

| ActiveRecord | SQL |
| :-------------------- | :------- |
| User.all | `SELECT * from users` |
| User.find(123) | `SELECT * from users WHERE users.id = 123 LIMIT 1` |
| user.posts | `SELECT * from posts WHERE posts.user_id = 123` |
| student.courses | `SELECT * FROM courses INNER JOIN enrollments ON courses.id = enrollments.course_id     WHERE enrollments.student_id = 456  ` |

---

## The Database Dance

#### Setting up your Database
0. Fire up your database server:  
Open `Postgres.app` and verify that you can see the **elephant icon** in your toolbar.

1. Create a new database:  
``` bash
rake db:create
```

2. Create tables in the database:
``` bash
rake db:migrate
```

3. Seed the database (optional):
``` bash
rake db:seed
```

#### Modifying your Database
Rollback the last migration:
``` bash
rake db:rollback
```

Destroy the database:
``` bash
rake db:drop
```

#### Playing with your Data
The rails console is the best place to go if you want to play with your data, test database queries, or perform a sanity check.

``` bash
rails console
# or
rails c

irb > User.all
```


## Migrations in Rails
1. Generate a new Rails project.

    `rails new models_example`

2. Move into your app directory:

    `cd models_example/`

3. Open Postgress.app and check for the elephant icon in your toolbar.

4. Create the database.

    `rake db:create`

5. Generate a User Model and Migration

    `rails generate model User first_name:string last_name:string`

6. Run migrations (create the `Users` table in the database):
    
    `rake db:migrate`

7. Stop and play with your data.

    `rails console` or `rails c`

    ``` ruby
    irb(main):001:0> albert = User.new
    irb(main):002:0> albert.first_name = "Albert"
    irb(main):003:0> albert.last_name = "Einstein"
    irb(main):004:0> albert.save
    #...
    irb(main):005:0> User.all
    #...
    irb(main):006:0> exit
    ```

8. Add a new column to your Users table:

    `rails generate migration add_age_to_users age:integer`

    Take a look at the new migration: open `db/migrate/123456789_add_age_to_users.rb`.

    Run your newest migration:  

        `rake db:migrate`

9. Rollback your last change (optional!):
    
    `rake db:rollback`

10. Destroy your database (dangerous!):
    
    `rake db:drop`


#### Check for Understanding
* Where do migrations live?
* What's that long number? e.g. `db/migrate/123456789_add_age_to_users.rb`
* What's the difference between a migration and a schema?
* What's the difference between a Model and an Instance?
* What's the relationship between a database table and a model?
    - What does a column map to?
    - What does a row map to?
* Is it okay to modify the schema?


## Model Validations in Rails

| Objective                                                                     |  
| :-------------------                                                          |  
| Explore the concept of a database migration |  
| Create a migration that adds a column to a table |  
| Create a migration that updates a column name in a table |  
| Understand how to apply and reverse migrations |  

#### Ensuring Data Consistency
Database tables are pretty strict about what kind of input they'll accept. For instance, a `String` is very different from an `Integer` or a `Timestamp`. But What if we want to make sure that a password has more than 6 characters, or that a username hasn't been taken? For that, we need to create some sort of "check" that verifies that our data can be saved. These checks are known as validations.

Read more about [Active Record Validations](http://guides.rubyonrails.org/active_record_validations.html).

**Validations live in our models**.

Open the `User` model we just created (`app/models/user.rb`).

Let's make sure each user _definitely_ has a first name and a last name before they're saved to the databse.

```ruby
class User < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
end
```

* Type `reload!` into the console to update your model validations.
* Try saving a user with no first or last name and see what error is thrown.

Here are some common checks:

* presence (e.g. a field can't be blank)
* uniqueness (e.g. email addresses and usernames)
* length (e.g. passwords must have more than 6 characters)
* format (e.g. usernames cannot contain illegal characters)
* dates (e.g. date cannot be in the past)
* numeric values (e.g. a bank customer cannot withdraw `-$10000.00`)

## Callbacks
We can control when a validation is run/applied using the following callbacks:

- before_
- after_

For example:

- before_save
- after_update

---

## Reading
- [What is an ORM?](http://stackoverflow.com/questions/1279613/what-is-an-orm-and-where-can-i-learn-more-about-it)
- [Model field data types](http://api.rubyonrails.org/classes/ActiveRecord/ConnectionAdapters/TableDefinition.html#method-i-column)
- [Active Record Migrations](http://edgeguides.rubyonrails.org/active_record_migrations.html)
- [Active Record Validations](http://guides.rubyonrails.org/active_record_validations.html)
