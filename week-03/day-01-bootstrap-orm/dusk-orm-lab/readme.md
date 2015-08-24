<h1>ORM (Object Relational Mapping)</h1>

Objectives|
-----|
|Identify the key components that constitute an ORM
|Build a simple ORM implementation that stores Javascript objects
|Learn the basic navigational tools of an ORM to prepare for MongoDB

<h2> What is ORM? </h2>

Object Relational Mapping is the practice of storing objects from an Object Oriented Language
into a database as objects, not SQL.  SQL (Structured Query Language) is a special-purpose
 programming language designed for managing data held in a 
 relational database management system (RDBMS.) Accessing this data can take a large amount of
 code and can often be cumbersome to generate.

Here is an example of code accessing a SQL database directly.

```javascript
var sql = "SELECT ... FROM persons WHERE id = 10";
var cmd = new DbCommand(connection, sql);
var res = cmd.Execute();
var name = res[0]["FIRST_NAME"];
```

![SQL Table](http://www.plus2net.com/sql_tutorial/images/table.jpg)

Here is an example of code accessing a database with ORM

```javascript
var p = ORM.GetPerson(10);
var name = p.getFirstName();
```

```javascript
{
	[
		{
			emp_no: 1,
			name: "Alex S",
			age: 26,
			department: "Store"
			salary: 5000
		},
		{
			emp_no: 2,
			name: "Golith K",
			age: 32,
			department: "Marketing"
			salary: 5600
		},
		{
			emp_no: 3,
			name: "Rabin R",
			age: 31,
			department: "Marketing"
			salary: 5600		
		},
		{
			emp_no: 4,
			name: "Jons",
			age: 26,
			department: "Security"
			salary: 5100		
		},
	]
}
```
ORMS store data as objects, rather than tables with rows of data.  You know and understand
Javascript and Object Oriented Programming.  We can use OOP to store and access complex
groupings of data and objects.  Accessing that data should be just as easy as accessing
objects in Javascript; we can use built-in methods that make sense in our language!

<h2>Lets build an ORM! </h2>

Today we will build an ORM that will store and retrieve data from a simple array.  We will 
perform four basic yet ubiquitous methods upon this array.  This will prepare use
for the more complex Javascript libraries and databases we will be utilizing in the future.

0.  Create a simple object called `Person`.
  - The `Person` object will have these properties:
  - `first_name` for a person's first name
  - `last_name` for a person's last name
  - `github_username` for a person's github_username  
    <br>
1.  Create an object constructor called Model.
  - The model will have these properties:
    - has a parameter called `name`
    - has a property `type` that is assigned the parameter `name`
    - has an array named data
    - has an identification number `_id` starting at zero
      <br><br>
2. Create an object prototype for Model, with the following methods:
  - create: 
    - Method that has the parameters `object` and `callback`
    - Create an object called object_container.  This object will house your
      passed-in object as well as other meta-data we will generate
    - Assign our object_container the Model's `_id` property.  Increment the `_id`
      afterwards to ensure unique ids for everyone
    - Assign our object_container the current date  as a date stampt.  Ues the variable
      `_ts`
    - Lastly, assign our object to our object_container as a `data` property
    - Push our object_container into the Model's `data` array
    - Call our callback. Our call backshould return any object passed-in as an argument
    <br><br>
  - find_by_id:
    - Method that has the parameters 'object_id' and 'callback'
    - Searches the Model `data` array for a matching object that has the same `object_id`
    - Returns the matching object within a callback call
    <br><br>
  - update:
    - Method that has the parameters `object_id`, `update_object`, and `callback`
    - Searches the Model `data` array for a matching object that has the same `object_id`
    - Updates that matching object's data property
    - Returns the matching object within a callback call
    <br><br>
  - destroy:
    - Method that has the parameters `object_id`, and `callback`
    - Searches the Model `data` array for a matching object that has the same `object_id`
    - Removes the matching object from the Model `data` array
    - Returns the matching object within a callback call
