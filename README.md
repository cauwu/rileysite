# Rileysite
A static personal website for a musician

This README contains instructions for what to do with the website and how it works.

## Viewing

### Download the website from Github
The easiest way to download the website is in the top-right of the screen when looking at the Rileysite Github repo, click the green button `Code` and then `Download ZIP`. Unpack the `.zip` file somewhere easy to get to on your computer, like your `Documents` folder.

### Local Server
If you just open the HTML files in a browser they won't show up properly. The HTML files request access to other files nearby (CSS files for page styling, colours, layout etc) and things like images and fonts, and by default the browser isn't allowed to do that when the website isn't loaded using a server unless you tell it to. It also can't request resources from other websites unless you tell it to. It's a security feature called [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) that is important when the website is live, but doesn't matter right now. You don't need to turn it off though.

You'll need to start a server. There's endless ways to do it but the simplest is probably using Python. You might already have Python installed, but if you don't, follow:

1) [Download the Python installer and install it](https://www.python.org/downloads/)
2) Press the Windows key and type '`cmd`'
3) When it opens, type `cd Documents/rileysite/rileysite` (or `cd [wherever you unpacked the zip file]/rileysite/rileysite`). Type `dir` to show what's inside the folder (directory) you're in if you get lost.
4) When you're inside the `rileysite` directory and you can see '`index.html`' on the list when you type `dir`, type `python -m http.server`

A local (offline) server will have opened. To see the website, open your browser and type in the search bar `localhost:8000`.

#### View the local server on your phone

Fun fact: When you launch a local server like this, it's visible to everyone on your LAN network. You can see your website from your phone by typing the local IP address of your computer + the port your server is on (in this case `8000`) into your phone's browser. (Not your street IP address)

You can find your local IP address by opening a command prompt window (press the Windows key and type `cmd`) and when it opens type `ipconfig`. If you're on WiFi, look for "Wireless LAN Adapter WiFi" or something similar and your local IP address will be under "IPv4 Address". (The first 2 numbers of this address will most likely be `192.168.x.x`)

Type your computer's local IP address `192.168.x.x:8000`, where `x` is numbers unique to you, into your phone's browser, and you should be able to see the website on your phone.

NOTE: I don't know if this works with Eduroam. I don't think so. If it doesn't, you can use Tailscale; install it on your computer and your phone and log in on the same `tailnet`, and then when you type `ipconfig` into the command prompt, copy "Autoconfiguration IPv4 Address" from under "Unknown adapter Tailscale" and use that instead with `:8000` appended.

#### What to do if Python doesn't work

You will be missing Python from your `PATH`. The `PATH` is a list that your command prompt uses (also called a terminal on other systems) to connect the word you type ("python") into the terminal with the actual program Python stored at `C:\Users\[yourname]\AppData\Local\Programs\Python\Python313`.

To fix the problem, follow [these instructions.](https://www.makeuseof.com/python-windows-path/) The same thing happens with command line programs on Windows like Java, Node, Git, etc.

## Editing

### Inspect Element

While you're looking at the website in a browser, you can press `Ctrl` + `Shift` + `I` together to open Inspect Element. It looks different between Chrome/Edge and Firefox, but it works roughly the same.

With Inspect Element you can see all the pieces that make up the website for testing. You don't need to do this very often unless you're adding new things or trying to find out why something is broken. You can also do it on other people's websites to find out how they've done something.

To the top-left of the inspect element window, there's a little button with an icon like a mouse on a rectangle. This is the element picker, and if you click it, and hover over things on the website, it will show you information about them.

To the top-right of the inspect element window, there's a little button with an icon like a smartphone and a tablet. If you click it, and at the top of the window that opens select a phone shape from the drop-down menu, it will show you what the website looks like on a phone. You can drag the sides of the viewer to change the width and height, showing you how the website looks on different sized screens.

From inspect element you can change parts of the HTML and CSS, but when you reload the page, they will be lost.

### Making Changes

I have designed the website so that it's pretty simple to change and update things as you need to. I will always be able to do things for you and keep the website updated, but you should learn how it works yourself too. It's your website.

A website's homepage is usually always named `index.html`. To make other webpages, you can make a new text file in the same folder as `index.html` or a folder underneath it, rename the file extension to `.html`, and give it a name with no spaces.

- `HTML` stands for Hypertext Markup Language, and this is where the content of your website goes. Text, images, links, and the boxes and spaces you want to separate your website into go here.
- `CSS` stands for Content Style Sheets, and this is where you style the elements you wrote in HTML. You can specify pieces and sections by name and position, align, colour, size them however you want using text.
- `JS` stands for Javascript. You can use Javascript to make certain parts about your website more interactive or change over time or circumstances. You don't need to touch Javascript for a long time though if you don't want to.

For more information about these things [you can start learning here if you want.](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started)

However, these are all text files. You can edit them all using a text editor. For a long time I just used the default notepad installed with Windows, or Notepad++ later. But [Visual Studio Code](https://code.visualstudio.com/) is much better and much easier to use.

When you save the text files after you've edited them, you can reload the website in the browser with `F5` and full-reload with `Ctrl` + `R`. Full-reload clears the cache and starts over, so if you've made a change and it isn't showing up in the browser for a reason you can't understand, try `Ctrl` + `R`. It will either be that, or you've written something invalid, which will show up using the element picker.

### Folder Structure

The `rileysite/` folder, which is the one at the root of the Github repo, contains some files you don't need to worry about.

- `README.md` is this file.
- `LICENSE` is a file used by Github to specify the open-source software license. You can change it if you want but it's unimportant.
- `package.json` and `package-lock.json` are files autogenerated by `Node.js`, which is a system I was using to experiment with `Three.js`; a 3D graphics library for webpages. It's not active right now.

In `rileysite/rileysite/` is where the website root is. A website root is the top of the tree, when you open your website, the browser starts checking from here for HTML files to load. For static webpages, this folder will usually have all your `.html` files, and also a `site.webmanifest` and sometimes other things. It doesn't matter much where everything is, but there are conventions. You can do whatever you like though, this is just how I laid it out.

- `index.html` is the homepage. It contains your contact info, your bio, links to other pages, and a spotlight section called `listen` for selected works.
- `works.html` is a page listing your portfolio.
- `events.html` is a page for performances upcoming and performances you've done previously.
- `news.html` is a page for publications about you, for example by the RCA or other people.
- The folder `static/` has all the resources for your website.

In `rileysite/rileysite/static/`:

- `css/` is for `.css` files. Most people only have one big one, called `style.css`, but you can have more than one with different names for different purposes. You can do styling modularly that way.
- `font/` is for fonts. For fonts you include yourself, you should usually have a `.woff2` version (modern) and a `.ttf` version (legacy)
- `image/` is for images, like a album art or photographs, things like that.
- `js/modules/` is for javascript.
- `site/` has some overlap with `images/`, but site is meant for things like logos, favicons, icons, background images for pages, border images, stuff like that; resources for decorating the site.
- `pdf/` is for `.pdf` files, for example a CV.

You can add more folders. It doesn't really matter where you put things, it just feels neat like this.

### Structure of Webpage HTML

The way I prefer to make webpages is for everything outside of the `<article>` tag to stay the same across every page, and for each page to only change things inside of `<article>`. However, unless there's a way of automatically doing that (Which I made for my own website, but I would have to make changes to it for it to fit your's, so maybe later), if you make changes to things like footers, links, headers, etc, you have to make those same changes across every webpage. That's not so bad, if you only have 4, 5, 6 webpages, so it's fine for now.

#### Next performances on the homepage

Inside the section called `#nextperformance`(`<div id=nextperformance>...`), there's three sections:

- `#perfname` (_performance name_) has the names of upcoming performances, top-down::soonest-latest
- `#perfloc` (_performance location_) has the venues of those upcoming performances in the same order
- The unnamed `.perf` section below that has the dates and cities in the same order as above.

You don't need to have 3 listings. You can have as many or as few as you like. However if there's too much text in any part, the text will go onto a newline and make it look messy.

In each section, on each line, there's space for a seperate link. The `#perfname` section can contain links to promotions or ticket sales, `#perfloc` can contain a link to a map to the venue, and the section below that with the dates and city can link to ticket sales also.

Links in HTML are in the format: `<a href="https://abcdefghijk.com">Click Here!</a>` where the link URL goes after `href=` in quotes `""` and between the chevrons `><` is where the text for the link goes. You can also have other HTML elements inside the chevrons, so boxes can be links, paragraphs, images, whatever you like.

To change the link, all you have to do is change whats in the `""` quotes and save the file. Then, when you reload the page and click the link, it should go where you intended.

#### Everywhere else

Hopefully it should be kind of self-explanatory how to edit the details of other parts of the webpage. To enable text wrapping in Visual Studio Code, press `alt` + `z`.

If you're unsure what a certain HTML element does, or if you're trying to find something from the website in the HTML page, open the website, open inspect element and go find it with the element picker. At the bottom of the screen (right-side if you're using Chrome/Edge and not Firefox) what you're hovered over should be highlighted in HTML text in yellow or pink.

## Github and Git

Github is a website that lets you see other people's Git repositories. Git is a software written by Linus Torvalds (the guy who also made Linux) as an open-source software for synchronising programming code projects across multiple users. Git is a command line tool and Github is a seperate organisation, but most people using Git use Github.

You don't need to use Git really, but it makes things easier once you learn how to use it. I wouldn't recommend it though because it's a lot of mental effort if you're not gonna use it very often.

It's the Github repo that will be provided to Cloudflare pages or Github pages (whichever you prefer, I use Cloudflare) and whatever is on the Github repo will be what goes live on the website.

Once Git is set up in a directory, it will automatically note the changes you've made to any of the files in that directory and its subdirectories. Using Git you download (_pull/fetch_) and upload (_push_) the changes, additions, deletions etc you made. Using Git you can also store a history that you can revert back to if you mess something up. You can also store different versions of the same project on Branches. A copy of your files and the changes you made are stored on Github.

Git will also tell you when other people have changed things about the project you're working on and will help you merge conflicts (when you both make changes to the same thing).

You can make a Github account. Choose a username that's easy to type, because you will need to do that a lot.

### Option 1

You can download a Git client like [Github Desktop](https://github.com/apps/desktop) and manage the version of the website that way. I have not used a Git client but it's probably a lot easier than learning how to use a command line if you don't have any reason to.

### Option 2

You can upload files directly to Github by just dragging them into the Github window. This is fine for additions and changes to files, but if you want to move things around or delete a file, you can't when you're just using the website.

### Option 3

You can use the Git command line in Visual Studio Code or by downloading [Git Bash for Windows](https://gitforwindows.org/). I can try and explain exactly how to use the Git command line, but I barely know, even though I use it all the time. Go for the Git Credential Manager for Windows option, and then log in using it.

### Then...

You're looking first to _clone_ the Github repository to your computer. It needs to be an empty directory, but if you've already downloaded the directory as a `.zip` file, don't worry. Just clone the online version into another folder, and if you haven't made any changes to the other one, you can just delete it, or if you have made changes, you can just copy+paste the changed files into the cloned folder.

On command line: Navigate to the directory you want `rileysite` to be added to, (like `/Documents/`) and then type: 
`git clone https://github.com/cauwu/rileysite`
If it worked, it should say something like `'rileysite' has been cloned into a folder named 'rileysite'`. Git will automatically be set up in that folder, and all the important information that Git needs will be in a folder named `.git/` inside `rileysite/`. If you can't see `.git/`, it's because folders and files starting with `.` are _hidden_. To unhide them, in File Explorer, go to `Options > View > Show hidden files, folders and drives`.

### When you've made changes and want to push them

First, `add` (meaning track) what you want to push. In a command line type `cd ~/Documents/rileysite` to change directory to the root of your website, and then:

`git status` will show what Git will upload. Every file you've changed, added or deleted should be highlighted in red as "not tracked", so to track them, type:

`git add .` (`.` is an operator that means "this directory", so by saying `add .` it means track everything in this directory)

Then `git status` again should highlight everything in yellow as tracked.

`git commit -m "message"` where you replace `message` in quotes with a short commit message (keep the quotes) saying what you did. The message can be anything, or nothing, but it's good practice to write something helpful. "Added news page", "Fixed an issue", etc.

Once you've made a commit it's stored on your computer. If you rollback to a previous commit, you will lose all the changes you made between that commit and the previous one. You can go forwards again though, because you committed your changes.

For your commit to be visible to everyone else, you need to `push` it.

`git push -u origin main` pushes the commit(s) you've made to the `main` branch. `-u origin` means `https://github.com/cauwu/rileysite`.

### Getting changes someone else has made

You need to manually check if changes have been made to the website by someone else. You should only check after you've made a commit, because if you don't, their changes will remove everything you've done.

Don't worry about someone else making changes to a file you were working on. Unless they have completely changed the file you were working on, Git will usually be able to help you merge the changes. Though, it's better to communicate to make sure you aren't making changes to the same files at the same time. If it does happen, you can `push` to a new branch, and then merge the branches later once you've talked it over.

To get changes from online, type:

`git pull` and Git will synchronise everything for you.

If you don't want to have your working directory changed when you get changes from online, type:

`git fetch` and the changes will be added only to your local Git repo. To update your files, you then have to type `git merge`.

### Git help

Git is complicated and takes a long time to understand. You may find some help by looking up commands you need in Google, and reading as much as possible. However often you need someone to explain to you how to use Git. Don't be worried to ask questions.

## Domain names

### Registration

You pay a domain registrar to reserve/rent domain names. This is charged yearly and the purchase price (first year) is usually cheaper than the renewal price (every year after that). There are multiple registrars and they tend to offer different prices. The organisation responsible for domain name standards is called [ICANN](https://en.wikipedia.org/wiki/ICANN) and they also handle legal disputes about domain name ownership.

A domain name is an aesthetic layer over an IP address that's easy to type and remember. You don't actually need a domain name to have a website, but it is pretty helpful.

A url is made up of parts:

``` 
https://www.google.com 

 - https://         This part means the protocol. There are other protocols, for example, Gopher: `gopher.quux.org:70/`
 - www.             This is a subdomain. It's optional, but can be used to direct to seperate websites.
 - google           This is called the `hostname`.
 - .com             This is called the `TLD`, or Top Level Domain name.

 ```

When you choose a domain name, you choose the _hostname_ and the _TLD_. There are only so many TLDs, though ICANN keeps adding more. The hostname can be whatever you want, so long as it + the TLD are unique together. So, for example, `google.com` is Google, but `google.ml` is not. (Note, `google.ml` _actually is_ Google, they bought it and it directs to `google.com`. But the point is the same)

#### Actually Buying a Domain name

Choose a registrar with good reviews, like Porkbun or something like that. You will pay them money, and they'll ask for another payment every year to keep your domain name yours.

But Porkbun doesn't have the best system for pointing your domain name to the server with your website on it. _Nameservers_ are the servers that run the _Domain Name System_ (DNS), and anyone can set up a DNS nameserver. However, for DNS system operators with less capacity and scale, like Porkbun compared to Cloudflare, Github, or Google, it can take longer for your domain name to become known by all the nameservers, who share records with each other in a big mesh network. You can make updates to these records and they may take days to resolve, or only hours with Cloudflare. Your DNS records also have less liklihood of expiring over time: If nobody from Malawi or Fiji accesses your website, and your only DNS nameservers are in North Carolina, many users may find it takes a long time for your website to load or pieces may time-out. You can experience this when trying to access obscure Chinese corporate websites, for example.

To get the maximum reach for your domain name, you should change your Porkbun (or whatever other registrar you used) nameservers to Cloudflare ones.

### DNS using Cloudflare



## Web Hosting

