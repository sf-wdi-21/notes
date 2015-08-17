##Array Challenges##

###Challenge 1 (forEach)###

*Curry up now* has a line wrapped around the truck! It takes about two minutes per order. Output the customer's name & their expected wait time.

Customers:   Justin, Ilias, Nathan, Camilo, Vikash, Adam, Brianna, Sarah, Ali, Jessie, Cameron


###Challenge 2 (maps)###

Elaine the Etsy Merchant thinks her prices are scaring off customers. Subtracting one penny might help:

```javascript
var prices = [3.00,4.00,10.00,2.25,3.01];
prices.SOMEMETHOD(callbackfn);
//[2.99, 3.99, 9.99, 2.24, 3.00]
```

Challenge:

-  On second thought, Juniper only wants to subtract a penny if it changes the dollars place, e.g.: 10.00 --> 9.99

-  Prices are going up! Juniper needs to raise her prices by 5%.


###Challenge 3 (filter)###
Is there an interesting trend in birthdays?  Do people tend to be born more on even-numbered dates or odd-numbered dates?  This is a great chance to do some serious science!

-  In an organized and semi-nonchaotic fashion,  create a master list of all birthdates with every person in the class.  We're only interested in the birthdate (1 - 31), we don't care about month or year.

-  Independently write a filter array function that creates an array for either odd or even birth dates.

-  Share your results with the class and bask in your great science!

###Challenge 4 (reduce)###
Goyle has a lucrative dog walking business. He's made mucho mulha this summer. How much did he make?

```javascript
var earnings = [20, 25, 60, 20, 85, 20];
earnings.SOMEMETHOD(callbackfn);
// 210
```
Challenge:

-  Goyle already has $500 in the bank. How would you incorporate this into your method call? (YOU ARE NOT ALLOWED TO USE output + 500)
-  BONUS: Goyle's curious how many times he earned $20 this summer. (HINT: there's a method for this!)