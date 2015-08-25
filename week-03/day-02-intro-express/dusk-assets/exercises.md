**Express Assets** -- Exercises

### Go Home -- [solution](solutions.md)
Add a `home.html` file to your `views` folder and put some content inside it. Send it as a response when users go to [localhost:3000](localhost:3000/).

### Contact Form -- [solution](solutions.md)
Add a `contact.html` file to your views folder and put a form inside of it (name, email, message). When the user submits (posts) the form to '/contact', try each of the following:
    - respond with "Thanks for getting in touch!"
    - respond with status code 200
    - redirect the user to the home page
    - console.log the form data: name, email, message
    - console.log an object containing the form data
    - Stretch: create an array called `contacts`, can you add each contact to the array and console.log the number of contacts, e.g. "Contacts: 5"

### My Info -- [solution](solutions.md)
Create a `/info` route that returns a json object with the following structure:
    ```
    {
        "name": "Bing Boda",
        "age": 12,
        "email": "bodabing@email.com"
    }
    ```
Verify that you can visit `/info` and see your json object.
- Next, add jquery to your home page.
    - Working in your console on your `/home.html` page, can you `get` your json data?
    - Stretch: how would you add your contact info to the page?
