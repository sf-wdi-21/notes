# In Class Exercise 1
## One-to-Many Associations

Imagine we're creating an online order system for an e-commerce site. A customer loads up their shopping cart with _items_ and a new _order_ is created when they check out. So we know we'll have an `order` model and an `item` model (don't worry about the customer model for the now).

Here's a start to what our models/attributes might look like:
Order: placed_on date...
Item: Name, description, price...

Be sure to think about what the relationship between _Orders_ and _Items_ should be.

If the relationship is modeled correctly, you'll be able to assign a variable `o = Order.create` and then type `o.items` without getting back an error. You should also be able ask an individual order item what order it belongs to using `item.order`.

Once you've finished creating the models:
  1. Create 5 items
  2. Create 2 Orders
  3. Assign 3 items to the order with id = 1, and 2 items to order with id = 2.
  4. Can you query all the items that belong to a specific order?
  5. Can you add and remove items from an order? (Make sure it's a permenant change!)
