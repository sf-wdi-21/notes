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

###For Linux Users

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

Check to make sure everything is working run the commands `node -v` and `npm -v`, ensuring they do not throw an error.


```

node -v
=> [the version number you have just installed]
npm -v
=> [the version number you have just installed]

```

