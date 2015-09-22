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

##Asset Pipeline

The asset pipeline provides a framework to concatenate and minify or compress JavaScript and CSS assets. It also adds the ability to write these assets in other languages and pre-processors such as CoffeeScript, Sass and ERB.

The asset pipeline is enabled by default.

###1.1 Main Features
The first feature of the pipeline is to concatenate assets, which can reduce the number of requests that a browser makes to render a web page. Web browsers are limited in the number of requests that they can make in parallel, so fewer requests can mean faster loading for your application.

Sprockets concatenates all JavaScript files into one master .js file and all CSS files into one master .css file. As you'll learn later in this guide, you can customize this strategy to group files any way you like. In production, Rails inserts an MD5 fingerprint into each filename so that the file is cached by the web browser. You can invalidate the cache by altering this fingerprint, which happens automatically whenever you change the file contents.

The second feature of the asset pipeline is asset minification or compression. For CSS files, this is done by removing whitespace and comments. For JavaScript, more complex processes can be applied. You can choose from a set of built in options or specify your own.

The third feature of the asset pipeline is it allows coding assets via a higher-level language, with precompilation down to the actual assets. Supported languages include Sass for CSS, CoffeeScript for JavaScript, and ERB for both by default.

###1.2 What is Fingerprinting and Why Should I Care?
Fingerprinting is a technique that makes the name of a file dependent on the contents of the file. When the file contents change, the filename is also changed. For content that is static or infrequently changed, this provides an easy way to tell whether two versions of a file are identical, even across different servers or deployment dates.

When a filename is unique and based on its content, HTTP headers can be set to encourage caches everywhere (whether at CDNs, at ISPs, in networking equipment, or in web browsers) to keep their own copy of the content. When the content is updated, the fingerprint will change. This will cause the remote clients to request a new copy of the content. This is generally known as **cache busting**.

The technique sprockets uses for fingerprinting is to insert a hash of the content into the name, usually at the end. For example a CSS file `global.css` may become `global-908e25f4bf641868d8683022a5b62f54.css`. This is the strategy adopted by the Rails asset pipeline.

###2.2 Asset Organization
Pipeline assets can be placed inside an application in one of three locations: `app/assets`, `lib/assets` or `vendor/assets`.

`app/assets` is for assets that are owned by the application, such as custom images, JavaScript files or stylesheets.

`lib/assets` is for your own libraries' code that doesn't really fit into the scope of the application or those libraries which are shared across applications.

`vendor/assets` is for assets that are owned by outside entities, such as code for JavaScript plugins and CSS frameworks. Keep in mind that third party code with references to other files also processed by the asset Pipeline (images, stylesheets, etc.), will need to be rewritten to use helpers like `asset_path`.

###2.4 Manifest Files and Directives
Sprockets uses manifest files to determine which assets to include and serve. These manifest files contain directives - instructions that tell Sprockets which files to require in order to build a single CSS or JavaScript file. With these directives, Sprockets loads the files specified, processes them if necessary, concatenates them into one single file and then compresses them (if `Rails.application.config.assets.compress` is `true`). By serving one file rather than many, the load time of pages can be greatly reduced because the browser makes fewer requests. Compression also reduces file size, enabling the browser to download them faster.

**Javascript**

a new Rails 4 application includes a default `app/assets/javascripts/application.js` file containing the following lines:

```javascript
// ...
//= require jquery
//= require jquery_ujs
//= require_tree .
```

In JavaScript files, Sprockets directives begin with `//=`. In the above case, the file is using the `require` and the `require_tree` directives. The require directive is used to tell Sprockets the files you wish to require. Here, you are requiring the files `jquery.js` and `jquery_ujs.js` that are available somewhere in the search path for Sprockets. You need not supply the extensions explicitly. Sprockets assumes you are requiring a `.js` file when done from within a `.js` file.

The `require_tree` directive tells Sprockets to recursively include all JavaScript files in the specified directory into the output. These paths must be specified relative to the manifest file. You can also use the `require_directory` directive which includes all JavaScript files only in the directory specified, without recursion.

Requiring these JS files:

```bash
app/assets/javascripts/home.js
lib/assets/javascripts/moovinator.js
vendor/assets/javascripts/slider.js
vendor/assets/somepackage/phonebox.js
```

We be as follows:

*app/assets/javascripts/application.js*

```javascript
//= require home
//= require moovinator
//= require slider
//= require phonebox
```

**CSS**

The same remarks about ordering in JS made above apply to CSS. In particular, you can specify individual files and they are compiled in the order specified.

Requiring these CSS files:

```bash
app/assets/stylesheets/buttons.css
lib/assets/stylesheets/nav-bar.css
vendor/assets/stylesheets/bootstrap.css
```

We be as follows:

*app/assets/javascripts/application.css*

```
/* ...
*= require bootstrap
*= require nav-bar
*= require buttons
*/
```

**Images**

In regular views you can access images in the `public/assets/images` directory like this:

`<%= image_tag "rails.png" %>`

Images can also be organized into subdirectories if required, and then can be accessed by specifying the directory's name in the tag:

`<%= image_tag "icons/rails.png" %>`

The asset pipeline automatically evaluates ERB. This means if you add an erb extension to a CSS asset (for example, `application.css.erb`), then helpers like `asset_path` are available in your CSS rules:

```css
.class { background-image: url(<%= asset_path 'image.png' %>) }
```

This writes the path to the particular asset being referenced. In this example, it would make sense to have an image in one of the asset load paths, such as `app/assets/images/image.png`, which would be referenced here. If this image is already available in `public/assets` as a fingerprinted file, then that path is referenced.




