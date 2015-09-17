#Installation party!

0.  Update Brew - to make sure we're all on the same page<br>
	`brew update`

0.  Install Postgress - a fantastic database<br>
	[Install this](https://github.com/PostgresApp/PostgresApp/releases/download/9.4.4.1/Postgres-9.4.4.1.zip)

0. Configure Postgres<br>
    ```
    sudo ARCHFLAGS="-arch x86_64" gem install pg -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/9.4/bin/pg_config
    ```
    Sanity Check: You should be able to run: `pg_config` and see the config path above.

0.  Install Rails - core development framework.<br>
	`gem install rails`

1.  Install GPG to install RVM - a public key generator and verifier<br>
	`brew install gpg`  
	

2. Install RVM - version manager for Ruby<br>
	`gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3`  
	

3.  Install RSPEC - testing library for Ruby<br>
	`gem install rspec`  
	
	
4. Install gem bundler - gem version tracker and maintainer<br>
	`gem install bundler`

5. Install pry - fitter, happier, more productive REPL for Ruby (replaces irb)<br>
	`gem install pry`
