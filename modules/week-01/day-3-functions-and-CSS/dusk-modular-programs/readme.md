#CSS 
Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language.

Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.

##CSS & HTML
Below is a simple website without any specific type of formatting or design.

**index.html**:

```
<!DOCTYPE html>
    <head>
    	<title>My Simple Site</title>
    </head>
    <body>
        <h1>Greetings!</h1>
        <p>Hello world!</p>
        <a href= "http://www.w3.org" >Click here!</a>
    </body>
</html>
```

We can add colors, styling, and formatting with inline attributes added to the html tags

**index.html:**

```
<!DOCTYPE html>
    <head>
    	<title>My Simple Site</title>
    </head>
    <body style="background-color:pink">
        <h1 style="color: crimson">Greetings!</h1>
        <p style="border: solid green 5px; width: 100px">Hello world!</p>
        <a style="font-size:30px" 
        	href= "http://www.w3.org/">Click here !</a>
    </body>
</html>
```
This works perfectly however we are forced to declare a `style` for every single html tag we want to change; **this doesn't adhere to our goal to create DRY code**.  

To make things a little more streamlined and easier to understand we can pull the style attributes out of the html tags and have them listed in a specific list of styles for each tag type.  The format below is the standard CSS style description for the background color of an `a` html tag. 

![CSS prototype](https://en-support.files.wordpress.com/2011/09/css-selectors-lrg.png)

The `selector` labelled `a` is the target html tag that will be altered with the property and value.  This means that all `a` html tags will have the property and value pair `background-color: yellow`.  As you can probably deduce, the background color of the `a` tags will become the color `yellow`.  Within the `{` and `}` declaration brackets we can list the various formatting changes we want to make on the `selector`.  There can be one attribute like above, or many more as you will see.  

Below we have pulled the style attributes out of the html tags and placed them in a `<style>` set of tags in the `<head>` section of the html document.  Now, whenever the document comes across a particular html tag, it will automagically know to apply the attributes we have set for it in the style tag.

**index.html:**

```
<!DOCTYPE html>
    <head>
    	<title>My Simple Site</title>
    	<style>
    		body { background-color: pink; }
			h1 { color: crimson; }
			p  { border: solid green 5px; width: 100px; }
			a { font-size: 30px; }
		</style>
    </head>
    <body>
        <h1> Greetings! </h1>
        <p> Hello world! </p>
        <a href= "http://www.w3.org">Click here!</a>
    </body>
</html>
```

Coding convention dictates that CSS should be expanded to have one property/value pair per line, with each selector having it's own line as well.  It may take up more space, but this convention allows us to quickly inspect CSS selectors and attributes.  

*Proper CSS coding convvention applied to the above `<style>` tags:*

```
	<style>
		body { 
	    	background-color: pink; 
	    }	    
		h1 { 
			color: crimson; 
		}		
		p  { 
			border: solid green 5px; 
			width: 100px; 
		}		
		a { 
			font-size: 30px; 
		}
	</style>
```

<br><br>
At this point, modern web design convention would dictate that this usage of the `<style>` tags with CSS selector attributes would be sufficient and proper.  As modern web developers, however, we will need to use a much more rich and complex set of style attributes for our html tags.  Our list of selectors with property/value pairs can become quite long.  We can pull our CSS code out of the html document entirely and store it in a new file.  This is where the .css file comes in.  

**style.css:**

	body { 
		background-color: pink; 
	}
	
	h1 { 
		color: crimson; 
	}
	
	p { 
		border: solid green 5px; 
		width: 100px; 
	}
	
	a { 
		font-size: 30px; 
	}


Our externalized CSS now has plenty of room to expand without making the html file referring to it crowded and unreadable.

What if we wanted to alter the appearance of just one paragraph or link tag?  The above `style.css` currently affects ALL `p` and `a` tags with the same property / value pair.  This limits us to one style per html tag type.  To increase our flexibity with assigning styles to tags, we assign certain html tags classes.  Below is an example of a `p` tag with a `class` attribute.

***in index.html:***

```
	<p class = "highlighted">
```  

The class attribute and its associated value in quotes lets the html document know that it must assign the CSS property of `.highlighted` to the html tag it is placed in.  Here is a sample of code showing the implementation of the `.highlighted` class.

**in style.css:**

```
	.highlighted {
		background-color: yellow;
	}
```

You can immediately see the similarities between standard CSS implementation and the new class implementation.  Unlike the previous implementation, the class selector CSS only affects html tags with the class attribute that matches. I the case above, any html tag with the class "highlighted" will have a yellow background.  Notice the period before the word `highlighted` in style.css.  This associates the CSS property 'highlighted' with the html tag class 'highlighted.'


