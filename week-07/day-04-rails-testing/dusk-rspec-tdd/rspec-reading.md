| Objectives |
| :---- |
| install rspec in rails app |
| create unit tests for our model validations |


### Terms

* `System Under Test`: some application component being tested or "what's being tested."
* `Dependent-On Component`: some application component connected to the **SUT**, but not really the subject of the test.
* [`Four Phase Test`](http://robots.thoughtbot.com/four-phase-test): is a methodology of setting up tests that breaks down a test into four phases: `setup`, `exercise`, `verify`, and `teardown`.

### Overview

**Testing is awesome (in the long term):**

* Save time
* Catch tricky edge cases
* It's a breeze to maintain/refactor/extend codebase
    * Immediate feedback when new feature x breaks old feature y.
    * Did the tests pass before? And do they pass now?

    
**Testing is awful (in the short term):**

* It's easy to write **bad** tests
    * Brittle interfaces -- the test breaks frequently as code changes
    * False positives -- poorly designed test gives you false confidence
    * It's hard to test the _right_ things
        * You know the joke about losing your car keys at night?

**Types of Tests:**

You can only test the "seams" of your programs / isolated components (Martin Fowler). If you can't test your code, it's likely badly entangled.

* Unit Tests -- do small, low-level things work independently? (e.g. a function or Model logic)
* Integration Tests -- do multiple things work in concert? (e.g. Controller logic)
* Acceptance Tests -- do elaborate, high-level things work as intended? (e.g. View logic).

**Testing Methodologies:**

* **EDD**: Error Driven Development
    * Get an error
    * Google it
    * Get another error
    * Google it
    * When you stop getting errors... You're done!

* **TDD**: Test Driven Development
    * "Red, Green, Refactor"
    * Write the tests before you code
        * Ensures you've understood the problem space before coding a solution. 
        * Keeps you honest: If you write them first, you're less likely to skip them!
    * "Ping Pong" (pair programming)
        * One person writes the test, the other person passes them.
        
* **BDD**: Behavior Driven Development
    * Like _User Stories_, but focus on the "behavior" of objects or users.
        * What does an instance _let_ you do?
        * What does a user _do_ on a page?
    * Tests the views / UI -- assumes everything else is working

**Take Away**

* Don't test everything -- 100% test coverage is a myth
* Write tests that help you be more proficient as a developer


If you feel ready to watch a demonstration, check out this <a href="https://www.youtube.com/watch?v=JhR9Ib1Ylb8" > Tutsplus Ruby Rspec Tutorial</a>.  The first 15 minutes are the most important, but feel free to watch it in its entirety.


### Resources

1. **Rspec-Rails Documentation** https://github.com/rspec/rspec-rails  
2. **Model Specs** https://www.relishapp.com/rspec/rspec-rails/docs/model-specs  

