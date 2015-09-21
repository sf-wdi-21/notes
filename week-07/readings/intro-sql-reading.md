
#A brief introduction to SQL

##What Are Relational Databases?

Relational databases were invented in the 1970's as a way to structure data so that it can be queried by a "relational algebra." The basic idea of relational model, though, was to use collections of data, Tables, where each database manages Relations among the data in various tables. Each table is organized like a spreadsheet with a Row (also known as "record") for each data item and with attributes of those items arranged in Columns*.

**Authors Table**

<table><thead>
<tr>
<th align="left"><code>id</code></th>
<th align="left"><code>first_name</code></th>
<th align="left"><code>last_name</code></th>
<th align="left"><code>year_of_birth</code></th>
<th align="left"><code>year_of_death</code></th>
</tr>
</thead><tbody>
<tr>
<td align="left">1</td>
<td align="left">Rudyard</td>
<td align="left">Kipling</td>
<td align="left">1865</td>
<td align="left">1936</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Lewis</td>
<td align="left">Carroll</td>
<td align="left">1832</td>
<td align="left">1892</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">H.G.</td>
<td align="left">Wells</td>
<td align="left">1866</td>
<td align="left">1946</td>
</tr>
</tbody></table>


**Books Table**
<table><thead>
<tr>
<th align="left"><code>id</code></th>
<th align="left"><code>title</code></th>
<th align="left"><code>publication_year</code></th>
<th align="left"><code>isbn</code></th>
<th align="left"><code>author_id</code></th>
</tr>
</thead><tbody>
<tr>
<td align="left">1</td>
<td align="left">The Jungle Book</td>
<td align="left">1894</td>
<td align="left">9788497896696</td>
<td align="left">1</td>
</tr>
<tr>
<td align="left">2</td>
<td align="left">Alice's Adventures in Wonderland</td>
<td align="left">1865</td>
<td align="left">9781552465707</td>
<td align="left">2</td>
</tr>
<tr>
<td align="left">3</td>
<td align="left">Rikki-Tikki-Tavi</td>
<td align="left">1894</td>
<td align="left">1484123689</td>
<td align="left">1</td>
</tr>
<tr>
<td align="left">4</td>
<td align="left">Through the Looking-Glass</td>
<td align="left">1871</td>
<td align="left">9781489500182</td>
<td align="left">2</td>
</tr>
<tr>
<td align="left">5</td>
<td align="left">The Time Machine</td>
<td align="left">1895</td>
<td align="left">9781423794417</td>
<td align="left">3</td>
</tr>
</tbody></table>

**Primary Key:** The primary key of a relational table uniquely identifies each record in the table. This column is automatically assigned a btree index in postgres.

##What is SQL?

SQL, Structured Query Language, is a specialized language used to create, manipulate, and query tables in relational databases.

- Data Definition Language
	- Define and update database's structure
	- CREATE, ALTER, RENAME, DROP, TRUNCATE
	- Data Types
	- Constraints
	
- Data Manipulation Language
	- CRUD data within the database
	- SELECT, INSERT, UPDATE, DELETE, ORDER BY
	- UPSERT (attempts an UPDATE, or on failure, INSERT) is part of SQL 3 but not yet in Postgres
	- Queries
	- Aggregation: GROUP BY, SUM, AVG, MIN
- Data Control Language (beyond our scope)
	- GRANT access to parts of the table

##Creating and Modifying RDB Structure

#Database Setup

Let's create our first relational database using the Terminal.

  `createdb practice`
  
Then let's connect to it by name so we can practice our SQL.

  `psql practice`
  
In your Terminal, you should see a prompt like the following:

  `practice=#`
  
#Workflow Setup

To save your progress on the in-class examples and the challenges, I suggest creating files that store your SQL commands. To run a `.sql` file, use the following command in your terminal:

  `psql -f <file_name>`
  
You can also create (and destroy) tables from within a SQL file. At the top of your SQL file, I suggest you write the following:

```sql
DROP DATABASE IF EXISTS database_name;
CREATE DATABASE database_name;
```

#Our First Table

Now let's try to create our first Table within the new database. Note: please feel free to shorten attribute names so they're easier to type.

```sql
CREATE TABLE author (
  id SERIAL primary key,
  firstName VARCHAR(255),
  year_of_birth INTEGER, -- also known as yob
  year_of_death INTEGER DEFAULT 'NaN',
  description TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT now()
);
```
- `SERIAL TYPE`
- `Primary Key`
- `MORE DATA TYPES`


#Altering Tables and Columns

We can ALTER this table after is created.

```sql
ALTER TABLE author ADD COLUMN last_name varchar(255);
```
An author doesn't need a description column, so let's remove it.

```sql
ALTER TABLE author DROP COLUMN description;
```

Oops, Table names should always be plural. We'll fix the author table name.

```sql
ALTER TABLE author RENAME TO authors;
```

Oops, it looks like our firstName column is camelCased. All column names should be snake_case. We can also rename columns.

```sql
ALTER TABLE authors RENAME COLUMN firstName TO first_name;
```

Let's DROP our table!

```sql
DROP TABLE authors;
```

##Creating, Reading, Updating, and Deleting data in our RDB

The library's having a fundraiser! Here's another table we might have in the database:

```sql
CREATE TABLE products (
  id SERIAL primary key,
  name VARCHAR(255),
  price numeric NOT NULL DEFAULT 'NaN',
  quantity integer NOT NULL DEFAULT 0
)
```
#Inserting Data into RDB

How do we get data into a table? With INSERT!

```sql
INSERT INTO products
  (name, price, quantity)
  VALUES
  ('bookmark', 0.50, 200);
```

Let's add a few more items to our products table

```sql
'book cover', 2.00, 75
'book bag', 60.00, 15
'reading light', 25.00, 10
```

#Reading Data from RDB

To retrieve data from inside our database, we use the command SELECT.

```sql
SELECT * FROM products;
```

Let's look at only some attributes of each product.

```sql
SELECT name, price FROM products;
```

We can use ORDER BY to sort the selected items.

```sql
SELECT name FROM products ORDER BY price;
```

The WHERE keyword allows us to narrow down our query results. We can grab just the bookmark record.

```sql
SELECT * FROM products
  WHERE name = 'bookmark';
```
  
We can grab the more expensive items only.

```sql
SELECT * FROM products
  WHERE price > 20.00
  ORDER BY price;
```
  
We can even use regular expressions to find products with "book" at the start of their names.

```sql
SELECT * FROM products
  WHERE name LIKE 'book%';
```

#Updating Simple Data in the RDB

So far we've had a great time using SELECT to read data from our TABLE. We can also change data. Here comes our first sale, a bookmark!

```sql
UPDATE products
  SET quantity = quantity - 1
  WHERE name = 'bookmark';
```

Let's also correct the spelling of book bag to bookbag.

```sql
UPDATE products
  SET name = 'bookbag'
  WHERE name = 'book bag';
```

You might wonder why you don't see anything change after you update an entry. If you'd like, you can tell Postgres to return the modified record. It just isn't the standard behavior.

```sql
UPDATE products
  SET quantity = quantity - 1
  WHERE name = 'bookmark'
  RETURNING *;
```

#Deleting Simple Data from an RDB

Let's remove a row in our products table. Book covers don't sell that well.

```sql
DELETE FROM products
  WHERE name = 'book cover'
  RETURNING *;
```

We could also DELETE everything but the bookmarks with the <> (not equal) operator.

```sql
DELETE FROM products
  WHERE name <> 'bookmark';
```

You can DELETE everything from a table using

```sql
DELETE FROM products;
```

**Challenge**: Insert four items into the products table.