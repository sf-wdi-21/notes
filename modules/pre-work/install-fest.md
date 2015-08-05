#Installation Guide

**Before the start of WDI it is vital that you have the following items installed.** These instructions make the assumption that most people are using Mac OSX. For Linux users reference the instructions at the bottom.

###Software update

**Why?**
Let's all be using as close to the same latest version of software as possible.

**How?**
Run `softwareupdate -l` in the terminal to see all available software updates. You can install all recommended updates with `sudo softwareupdate -irv`.


###Xcode's command line tools

**Why?**
The command line tools includes GCC, a compiler for the C language. This will be necessary to install some of the tools we'll be using throughout the class.

**How?** Run `xcode-select --install` in the terminal and click `install` when you are prompted.

###HomeBrew

**Why?**
HomeBrew is a package manager. It helps us install, uninstall, and update the various languages & tools we'll be using for development.

**How?**
Run `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` to start the download.

Once finished run `brew doctor` to make sure everything is working correctly.


###Node

**Why?**
If you want to be able to run JavaScript outside your browser Node can do that.

**How?**
Run `brew install node` in your terminal. Wait for the download to finish and type `node` into your Terminal to enter a Node REPL. Try a few JavaScript commands such as simple addition to ensure it's working. Quit by typing `ctrl-c` twice.

---

###Google Chrome

**Why?**
The Chrome Browser has built-in web-developer features that we will use throughout the cohort.

**How?** 1. [Download](https://www.google.com/chrome/browser/desktop/index.html) the latest version of Google Chrome here.  
2.  Accept the Terms and Conditions, and open the downloaded googlechrome.dmg file.  
3.  A window will open showing the Chrome icon and your Applications folder.  Drag the Chrome icon to the Applications folder.  
4.  Launch the Chrome app from the Applications folder.  
5.  Right click the open Chrome icon on your dock, mouseover Options, and choose Keep In Dock.  You'll be using this app a lot!

###Slack

**Why?**
Slack is a great communication tool to ask questions to the whole class, keep in contact with your team mates, and share documents.  

**How?** You can download the Slack OSX app from the itunes store OR you can [Download it here.](https://slack.com/ssb/download-osx)

*If you downloaded the file instead of installing via the itunes store, follow the instructions below.*

1.  Unzip the slack_1.1.3.zip file.
2.  Move the Slack app that has appeared into your Applications folder.  
3.  Launch the Slack app from the Applications folder.
4.  Right click the open Slack icon on your dock, mousover Options, and choose Keep in Dock.
5.  Follow the instructions within the Slack app to get connected to the right channels for WDI-21.

###Spectacle
***Why?*** Spectacle manages your desktop layout.  A developer has multiple windows and multiple instances of the same applications running at any given time, and this app allows you to focus on productivity rather than managing your screen real estate.

***How?*** [Download the app here](https://s3.amazonaws.com/spectacle/downloads/Spectacle+0.8.10.zip) or go to [spectacleapp.com](spectacleapp.com)

The install instructions are identical to install Slack, minus the channel joining bits.

1.  Unzip the Spectacle+08.01.zip file.
2.  Move the Spectacle app that has appeared into your Applications folder.  
3.  Launch the Spectacle app from the Applications folder.
4.  You'll see a pair of glasses up above in your Desktop Bar next to your time, battery, etc.  
5.  Slack works in the background automagically to save you dock space!

##For Linux Users

You may use Linux in WDI as it is similar to Mac OSX (they are both UNIX-based). You may have to be more resourceful in terms of installing your tools at times as our resources are written with OSX. Don't worry OSX & Linux have more similarities than differences. DO NOT use the Windows operating system, it is not UNIX based and therefore will be much more different.

For those using Linux you should already have `apt` on your system, which is equivalent to HomeBrew and will act as your package manager. Once you update your software you many use `apt` to install node.

Install Node

```
sudo apt-get install nodejs
```

Install npm (node's package manager)

```
sudo apt-get install npm
```

Create a alias/symbolic link that shortens nodejs to node

```
sudo ln -s /usr/bin/nodejs /usr/bin/node
```

Check to make sure everything is working by running the commands `node -v` and `npm -v`.  This will give you their software versions and lets you know there are no errors.


```
node -v
=> [the version number you have just installed]
npm -v
=> [the version number you have just installed]

```

**Install Chrome (for linux)**<br>
Navigate the the [Chrome Desktop version](https://www.google.com/chrome/browser/desktop/) and choose the linux flavor of Chrome that applies to you.

**Install Slack (aka PlaidChat for Linux)**

Run the following from the terminal:
```
npm install plaidchat -g
```
Run ```plaidchat``` in the terminal.  This command will install the package on your path.

You can then run your client from your terminal. 

(plaidchat is not created by, affiliated with, or supported by Slack Technologies, Inc.)

**Spectacle (linux alternatives)**<br>
Ubuntu-based linux systems come with powerful window management baked in, however [i3](http://i3wm.org/downloads/) has received high praise by developers.  Installation is at your discretion
