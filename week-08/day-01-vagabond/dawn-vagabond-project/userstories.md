# Vagabond User Stories

A travel-writing platform, with city-specific travel “logs”.

## Sprint 1: Basic Auth & Profiles

A user should be able to ...

1. go to “/” and see a basic splash page and see...
  * the name of the website, and
  * links to “login” and “signup”
1. sign up for an account
1. log in to their account if they already have one
1. be redirected to their public profile view after logging in
1. on their public profile, see their name, the current city they have set in their profile, and their join date
1. see the site header on every page, and 
  * on the header, see a link to log out if they’re logged in
  * on the header, see links to log in and sign up if they’re logged out
1. update their profile
  * change their name + their current city
1. see the titles of all the posts they’ve contributed (start with pre-seeded data)
  * link each title to the post
1. view individual posts with author, title, and body

### Bonuses

A user should be able to...

1. see a “default” profile-photo on their profile page before adding their own photo
1. update their photo (consider using Paperclip)
1. see their photo next to their posts

---

## Sprint 2: CRUD

A user should be able to...

1. view the “San Francisco” homepage (at “/cities/1”)
  * including the site-header
  * and the name of the city
  * and an iconic photo from SF
1. view a list of posts on the San Francisco Homepage
  * sorted by newest first
  * link the title to the post
1. use a “post” button on the San Francisco city page to pull up the new post form
1. create a new log-post for San Francisco (**Hint:** nested resources)
1. click “edit” on ANY individual post, and be redirected to the edit form
1. click “delete” on ANY individual post, then
  * see a pop-up that says: “Are you sure you want to delete #{title}?”
  * if the user confirms, delete the post

### Bonuses

A user should be able to...

1. visit city homepages through pretty urls, like “cities/san-francisco”...
1. visit user profile pages through pretty urls, like "users/jessica"...
1. on a city's homepage,
  * see post bodies truncated to 1000 characters max, with a link to view more
  * see only the 10 newest posts
  * see a relative published-date, e.g. “2 days ago”

---

## Sprint 3: Validations & Authorization

A user should be able to...

1. view home pages for “London” and “Gibraltar” posts
1. view all vagabond cities as markers/pins on a map on the site's main page
1. click on a pin on the main page map and be redirected to the corresponding city page
1. verify that a new post they create is successfully published on the correct city homepage

A user CANNOT save invalid data to the database, according to the following rules:

1. A user CANNOT sign up with an email (or username) that is already in use
1. A post's title must be between 1 and 200 characters
1. A post's body must not be empty
1. A post's city must already exist in the database

A user is authorized to perform certain actions on the site, according to the following rules:

1. A user MUST be logged in to create/update/destroy resources
1. A user may only edit/delete their OWN posts

#### Bonuses

A user should be able to...

1. view an error message when form validations fail, for the following validations:
  * A title must be between 1 and 200 characters
  * Body must not be empty
1. view only the 10 most recent posts on the homepage (pagination)
  * and a link/button to the “next” 10
  * add a link/button to the “previous” 10
1. see a list of the city pages they’ve contributed to, on their public profile
1. see the number of posts they’ve written for each city, next to the city's name in their profile

---

## Sprint 4 (N:N and Beyond)

A user should be able to...

1. add tags to posts, and
  * see a post's tags on the city page, on the author's profile page, and on the post page
  * remove tags from posts
1. comment on individual posts
  * see the number of comments a post has on the post's view page
  * see all of the comments they’ve left, listed on their public profile

### Bonuses

A user should be able to...

1. create tags at the same time as they create a new post 
1. click “follow this writer” on another user’s profile page, and
  * see people they follow listed on their public profile page
  * see a feed of posts written by people they follow
* See Instagram photos for a city location
* Sign in with OAuth for Instagram