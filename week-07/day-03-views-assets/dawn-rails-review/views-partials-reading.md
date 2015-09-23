##Partials

###3.4 Using Partials

Partial templates - usually just called "partials" - are another device for breaking the rendering process into more manageable chunks. With a partial, you can move the code for rendering a particular piece of a response to its own file.

###3.4.1 Naming Partials

To render a partial as part of a view, you use the render method within the view:

`<%= render "menu" %>`
This will render a file named `_menu.html.erb` at that point within the view being rendered. Note the leading underscore character: partials are named with a leading underscore to distinguish them from regular views, even though they are referred to without the underscore. This holds true even when you're pulling in a partial from another folder:

`<%= render "shared/menu" %>`
That code will pull in the partial from `app/views/shared/_menu.html.erb`.

###3.4.2 Using Partials to Simplify Views

One way to use partials is to treat them as the equivalent of subroutines: as a way to move details out of a view so that you can grasp what's going on more easily. For example, you might have a view that looked like this:

```html+erb
<%= render "shared/ad_banner" %>
 
<h1>Products</h1>

<p>Here are a few of our fine products:</p>
...
<%= render "shared/footer" %>
```

Here, the `_ad_banner.html.erb` and `_footer.html.erb` partials could contain content that is shared among many pages in your application. You don't need to see the details of these sections when you're concentrating on a particular page.

###3.4.4 Passing Local Variables

You can also pass local variables into partials, making them even more powerful and flexible. For example, you can use this technique to reduce duplication between new and edit pages, while still keeping a bit of distinct content:

*new.html.erb*

```html+erb
<h1>New zone</h1>
<%= render partial: "form", locals: {zone: @zone} %>
edit.html.erb

<h1>Editing zone</h1>
<%= render partial: "form", locals: {zone: @zone} %>
_form.html.erb

<%= form_for(zone) do |f| %>
  <p>
    <b>Zone name</b><br>
    <%= f.text_field :name %>
  </p>
  <p>
    <%= f.submit %>
  </p>
<% end %>
```

Although the same partial will be rendered into both views, Action View's submit helper will return "Create Zone" for the new action and "Update Zone" for the edit action.

Every partial also has a local variable with the same name as the partial (minus the underscore). You can pass an object in to this local variable via the :object option:

`<%= render partial: "customer", object: @new_customer %>`

Within the customer partial, the customer variable will refer to `@new_customer` from the parent view.

If you have an instance of a model to render into a partial, you can use a shorthand syntax:

`<%= render @customer %>`

Assuming that the @customer instance variable contains an instance of the Customer model, this will use `_customer.html.erb` to render it and will pass the local variable customer into the partial which will refer to the @customer instance variable in the parent view.

###3.4.5 Rendering Collections

Partials are very useful in rendering collections. When you pass a collection to a partial via the `:collection` option, the partial will be inserted once for each member in the collection:

*index.html.erb*

```html+erb
<h1>Products</h1>
<%= render partial: "product", collection: @products %>
```

*_product.html.erb*

```html+erb
<p>Product Name: <%= product.name %></p>
```

When a partial is called with a pluralized collection, then the individual instances of the partial have access to the member of the collection being rendered via a variable named after the partial. In this case, the partial is `_product`, and within the `_product` partial, you can refer to product to get the instance that is being rendered.

There is also a shorthand for this. Assuming `@products` is a collection of product instances, you can simply write this in the `index.html.erb` to produce the same result:

```
<h1>Products</h1>
<%= render @products %>
```

Rails determines the name of the partial to use by looking at the model name in the collection. In fact, you can even create a heterogeneous collection and render it this way, and Rails will choose the proper partial for each member of the collection:

In the event that the collection is empty, render will return nil, so it should be fairly simple to provide alternative content.

```html+erb
<h1>Products</h1>
<%= render(@products) || "There are no products available." %>
```

Citation: [Rails Guides](http://guides.rubyonrails.org/)
