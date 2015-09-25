
#Sending mail from Rails


####Goals

- Learn how to send emails from rails **and** the command line
- Understand basic mail configuration
- Practice adding new feature to exisiting code base

###Brief history

The creator of email is [Ray Tomlinson](http://www.npr.org/templates/story/story.php?storyId=120364591).

The mail protocol on the Internet is **Simple Mail Transfer Protocol (SMTP)**. Think of it as http for mail.

You can send emails directly from your computer using **sendmail** and the **mail** command. Sendmail is a general purpose internetwork email routing facility.

Try it out:

```bash
echo "an interesting way of sending emails" | mail -s "hi there!" your_email_address_here
```
(check your spam folder)

This is what's happening!

![email diagram](http://www.ponderweasel.com/wp-content/uploads/2014/03/how-email-works-diagram.png)


##Mail in rails

Sending email from Rails applications is easy thanks to [**ActionMailer**](http://guides.rubyonrails.org/action_mailer_basics.html). 

Instances of ActionMailer behave like controllers. The difference is that they have methods representing emails, rather than pages. 

####1) Create ActionMailer instance

Just like controllers, the best way to create an ActionMailer instances is asking rails to generate one:

```bash
rails g mailer user_mailer signup_confirmation
```
	
This command creates an app/mailers directory with a user_mailer.rb file in it and we can use this to send out our signup confirmation email. The generator also creates two views for the message which contains default text. One view for plain text emails, another formatted in html. This is to support **multi-part emails**.

```
/app/views/user_mailer/signup_confirmation.text.erb
/app/views/user_mailer/signup_confirmation.html.erb
```

Not all clients prefer HTML emails, and so sending a plain text version is best practice. ActionMailer sends **multi-part emails**, the mail client picks the preferred.
	
####2) Writing the email method
	
Note that we can share instance variables between the view and the mailer itself much like we can with a controller.
		
It’s important that the **signup_confirmation method** ends with a call to mail as this will generate the email and return it. 

We can pass a variety of options to this method including who we send it to and the message’s subject. 

Here's the `signup_confirmation` email:

```ruby
  def signup_confirmation
    @greeting = "Hi"

    mail to: "to@example.org", subject: "Sign Up Confirmation"
  end
```  
  
See the [API documentation](http://api.rubyonrails.org/classes/ActionMailer/Base.html) for a list of all the options we can pass in to the mail method, for example, how to send attachments.

We still need to specify who to send the email to; this should be the email/username specified in the form. 

By design mailer classes don’t have access to request parameters so we’ll have to pass in the User model in different way. 

We’ll alter the signup_confirmation method so that it takes a user argument and pass the user in that way. We can then call `user.username` to get their email address. We’ll also set an instance variable to that user so that we can use it in the view.

```ruby
def signup_confirmation(user)
  @user = user

  mail to: user.username, subject: "Sign Up Confirmation"
end
```

####3) Customizing the email

Let's go to the views. It's just a view, so we can use instance variables.

```ruby
<%= @user.username %>,

Thank you for signing up!
```

####4) Sending the email

Our email is now pretty much complete and we just need to send it from our `access_controller`.

Decide when you want to send the email and ask `UserMailer` to deliver the email:

```ruby
UserMailer.signup_confirmation(@user).deliver
```

####5) Mail configuration

For **development purposes**, use local sendmail to deliver email. This should work if you were able to send email from the command line earlier. 

The configuration resides in `/config/environments/development.rb`

Search for `mail` and add/adjust these lines:

```ruby
config.action_mailer.raise_delivery_errors = true 
config.action_mailer.delivery_method = :sendmail
config.action_mailer.perform_deliveries = true
```

However, in **production**, you want to use a real smtp server. Find out from your hosting provider or ISP if and how to use provided smtp servers for a hosted rails application.

**For a projects**, [you can simply use a gmail account](http://kb.siteground.com/google_free_smtp_server/)!

Here's how it works:

Store your email in `config/application.yml`

```yml
gmail_username: "username@gmail.com"
```

And store your password in `secrets.yml`

```yml
gmail_password: "password"
```
Then, create a new [initializer file](http://guides.rubyonrails.org/configuring.html#using-initializer-files) `/config/initializers/setup_mail.rb` configuring `ActionMailer` along these lines:

	
```ruby
ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "gmail.com",
  :user_name            => ENV['gmail_username'],
  :password             => Rails.application.secrets.gmail_password,
  :authentication       => :plain,
  :enable_starttls_auto => true
}
```
