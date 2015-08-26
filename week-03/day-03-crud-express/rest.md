#### Pre-Reading
* [HTTP Intro](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
* [HTTP Headers for Dummies](http://code.tutsplus.com/tutorials/http-headers-for-dummies--net-8039)

#REST Convention

Representational State Transfer (REST) is a software architectural style for building scalable and performant web services.

The style advocates that web applications should use HTTP verbs as they were originally envisioned—`GET` for reading, `POST` for `creating`, `PUT` for updating, and `DELETE` for destroying. An application that adheres to this principle is said to be RESTfully designed.

##CRUD

RESTful principles provide strategies to handle create, read, update, and destroy (CRUD) actions using HTTP. For example if we are interested in CRUDing tickets:

* `GET /tickets` - Retrieves a list of tickets
* `GET /tickets/12` - Retrieves a specific ticket
* `POST /tickets` - Creates a new ticket
* `PUT /tickets/12` - Updates ticket #12
* `PATCH /tickets/12` - Partially updates ticket #12
* `DELETE /tickets/12` - Deletes ticket #12

*With `GET /tickets`, the client is sending an HTTP `GET` request to the path `/tickets`.*

*Replace tickets with any resource! Instagram would replace it with `photos`, while Quora with `questions`.*

*The resource name should always be pluralized.*

###Routes

A verb, i.e. `GET`, in combination with a path, i.e. `/tickets`, is a **route**.

Each route (HTTP verb & path combination) will execute a modular block of code designed for a specific purpose.

REST helps standardize our routes to expected CRUD actions for our data.

###Metadata & Query Parameters

Let's say you are asking a server for a specific resource, maybe chickens, but you also want them sorted by their age and limited to five results.

Based on RESTful conventions we would expect the server to return a list of chickens when we go to the route `GET /chickens`. However, they will probably not be sorted by age. So how could we do this?

Whenever you want to give additional options to the server it is most common to place them in the **query parameters**. This additional information about your data is also known as **metadata**.

RESTful convention holds that all metadata is passed in as query parameters.

Going back to the origional problem, grabbing the five oldest chickens, we can put our metadata in the query parameters as such.

```GET /chickens?sortBy=age&limitTo=5```

*This is assuming the documentation for this service states that `sortBy` and `limitTo` are available options to us*

##Assumptions

Envisioned primarily by Roy Fielding, the REST convention makes a certain set of assumptions...

**Client-server architecture**

A client requests information from a server.

![c-s](https://www.ics.uci.edu/~fielding/pubs/dissertation/client_server_style.gif)

**Statelessness**

The interaction between the client and server is [stateless](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#HTTP_session_state), meaning the request cannot take advantage of any remembered context on the server. In other words, HTTP servers will treat each request independently.

![c-s-s](https://www.ics.uci.edu/~fielding/pubs/dissertation/stateless_cs.gif)

**Caching**

Clients will save information unlikely to change often to avoid repeated requests.

![c-c-s-s](https://www.ics.uci.edu/~fielding/pubs/dissertation/ccss_style.gif)

**Uniform Interfaces**

The manner in which clients request information should be standardized.

![uniform-interface](https://www.ics.uci.edu/~fielding/pubs/dissertation/uniform_ccss.gif)

**Layered Systems**

Server-side complexity of deep layered systems is to be abstracted away from the client.

![layered-systems](https://www.ics.uci.edu/~fielding/pubs/dissertation/layered_uccss.gif)


##Further Reading
* [REST API Quick Tips](http://www.restapitutorial.com/lessons/restquicktips.html)
