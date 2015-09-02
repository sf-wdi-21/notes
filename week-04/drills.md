##Week Four Drills

###Day 1 - Binary Search


Serial Version:

```javascript

function binarySearch(searchArray, searchElement) {
 
    var min = 0;
    var max = searchArray.length - 1;
    var mid;
    var currentElement;
 
    while (min <= max) {
        mid = (min + max) / 2 | 0;
        currentElement = searchArray[mid];
 
        if (currentElement < searchElement) {
            min = mid + 1;
        }
        else if (currentElement > searchElement) {
            max = mid - 1;
        }
        else {
            return mid;
        }
    }
 
    return -1;
}


```

Recursive Version:

```javascript

function binarySearchR(searchArray, searchElement, min, max) {
  if (max < min) { return null; }
 
  var mid = Math.floor((min + max) / 2);
 
  if (searchArray[mid] > searchElement) {
    return binarySearchR(searchArray, searchElement, min, mid - 1);
  }
  
  if (searchArray[mid] < searchElement) {
    return binarySearchR(searchArray, searchElement, mid + 1, max);
  }
  return mid;
}

```


### Day 2 - Keeping Things a secret.

####Encryption/Decryption

Public-key cryptography, also known as asymmetric cryptography, is a method of ensuring that data is private and verified when sent from one destination to another. 

When we use the term **key** we really refer to a specific mathematical algorithm that converts text, documents, etc. from its original form to unreadable characters and visual garbage, known as **cyphertext**.  

####Public Key Encryption Example.
We have two friends named Alice and Bob.  Alice wants to send Bob a message, however she wants to encrypt her message so that only Bob can decipher and read it.  Bob has provided her and everyone else in the world with a publicly available key that will encrypt her message.  His **public** key that he has distributed encrypts the data in a very particular manner that is impossible to decipher unless you have the matching **private** key. Bob does **not** distribute his private key and keeps it a secret.

When Bob receives the message from Alice, his special **private** key is the only key with the ability to decipher the message that the **public** key encrypts.  It's a two-piece system; there's no way to decrypt a public-key encrypted file unless you have the private key.

 ![](http://www.itgstextbook.com/chapter5-security/public-key-encryption.png)

####Message Authentication
If Bob wants to send Alice a response to make sure he received the message, he can perform the above encryption in reverse.  Bob can encrypt his message with his **private** key and send it off.  It should be noted, however, that anyone with Bob's **public** key can decipher his message.  This is a vulnerability, however Bob only cares about making sure that Alice knows that it was truly Bob that sent this new message.  **Private** key encrypted files can only be decrypted with **public** keys.  Since Bob is diligent about keeping his **private** key guarded, we know hat any message sent with his private key encryption is truly from him.

###Question

How can we ensure that only Alice can read Bob's authentic **private** key encrypted message?


###Keeping passwords truly safe
To keep your passwords difficult for hackers to guess, they will oftentimes 'hash' your original password into a difficult to guess string of letters and numbers.  To 'hash' something in the the encryption world refers to making something unique yet indecipherable.  Once data is hashed, it is impossible to 'un-hash' it.  

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cryptographic_Hash_Function.svg/2000px-Cryptographic_Hash_Function.svg.png)

The website that requires a password stores the hash result rather than your password.  Any guesses why?

Many hackers have assembled **massive** lists of the most commonly used passwords converted into hashes to use when trying to crack password protected accounts.  These are called Rainbow Tables.  These tables reach in excess of 52 Gb of passwords!  Each website uses generally the same hashing method, so the rainbow table became quite dangerous and powerful. 

To counter rainbow tables, websites began using a technique called **salting** with the passwords that customers use.  Salting is the act of adding a string to a customer's password THEN hashing the new string.  This makes any table that a hacker has assembled completely useless, as his/her 'evil' hashes don't have the salt included at the time of creation.  This salt string is publicly available, however it only applies to one particular website.  This makes it time-consuming and resource-expensive to try to recreate a rainbow table based on one website with a particular salt.  

![](http://cache.gawkerassets.com/assets/images/17/2011/08/passwords.jpg)

*We can still do our part!  To make it extremely difficult for computers to guess your password, consider using 4 random words strung together.*  

##Day - 03: Bubble Sort

Pre-work: [First, some Hungarian ("Csángó") folk dance](https://www.youtube.com/watch?v=lyZQPjUT5B4)

Bubble sort is one of the first sorting algorithms you should try and master.  It essentially forces larger elements to 'sink' to the bottom/back while inadvertently 'floating' smaller elements to the top/front of a list.  This is done with numerous comparisons between one element in an array with its neighbor.  

###Sort the list using Bubble Sort: [5,4,2,3,1,6]

####Iteration 1
Look at the first two elements in the list.
	
0: [**5, 4**,2,3,1,6]  

Is 5 > 4 ? Yes! Swap!

If an element on the left (5) is greater than the element on the right (4), the two elements 'swap' locations

1: [4,**5,2**,3,1,6]  

2: [4,2,**5,3**,1,6]  

3: [4,2,3,**5,1**,6]  

4: [4,2,3,1,**5,6**]  


**Important:** We now know that the last element in the list is the largest element in the list. There's no need to do a comparison with that number ever again.


####Iteration 2

0: [**4,2**,3,1,5,~~6~~]

1:  [2,**4,3**,1,5,~~6~~]

2:  [2,3,**4,1**,5,~~6~~]

3:  [2,3,1,**4,5**,~~6~~]

Stop!

Remember: we know that last element is the largest number in the list.  There is no need to compare against that number ever again.  We also now know that the **second** to last number is the second largest number; no need to move that one ever again as well. (Detect a trend?)

###Iteration 3

0: [**2,3**,1,4,~~5,6~~]  

If an element on the left has met a larger or equal element, we look at its bigger neighbor and now compare the larger neighbor to it's neighbor on the right.  The process is continued until our established end.

1: [2,**3,1**,4,~~5,6~~]

2: [2,1,**3,4**,~~5,6~~]

Stop!

We don't stop sorting until we hit the end.  Even if we find 

###Iteration 4

0: [**2,1**,3,~~4,5,6~~]

1: [1,**2,3**,~~4,5,6~~]

Stop!

###Iteration 5
0: [**1,2**,~~3,4,5,6~~]

Stop!

When there is only one element (the first element) left in our unsorted list, it is already sorted for us as a freebie!

###List is now sorted using Bubble Sort: [1,2,3,4,5,6]

![](http://cdn2.crunchify.com/wp-content/uploads/2013/01/BubbleSort-Algorithm-Crunchify.jpg)

###Now write your own bubble sort!
####Hints:
If you want to swap two variables, a and b:

```javascript
var a, b, temp;
temp = a;
a = b;
b = temp;
```

You may use a conventional for loop
