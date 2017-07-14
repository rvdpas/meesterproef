# Meesterproef - Persgroep application

In this repository, you will find the code for De Persgroep application.
De Persgroep is a leading publisher of national, regional and local news brands, magazines, websites and is active on radio. The goal of this project is to create a app for a younger group of future writers. This app will give them the chance to create content younger people enjoy based on their interests. In the app users can write and read stories they think are relevant for their target audience. The whole idea behind this that young writers get the opportunity to create the content for the young readers.

## live link
[live](http://4d2a9661.ngrok.io/) 

## Concept
The concept is to involve younger to people to create news that they think is important. Yonger people know what they like and what they don't like. This way they are their own target audience. In the application you can add topics that you are interested in. After you've selected them, content will appear with that topic. Users can see how the aricle is doing by the amount of likes that it has. They have the ability to read the news, by going to the detail page. This is were they can like the artikel and place a comment of their opinion.

## Vakken voor de beordeling
- Web App From Scratch 
It is a 2 page application, if i'm refactoring my code i'll write it object oriented. It is more clear to read.

- Css To The Rescue
I've used type selectors, flexbox layout. If i had more content i've could have done more with the CSS techniques i've learned during the class CSS To The Resque.

- Performance matters
The application is g-zipped which speeds up the application by a lot. I would like to add a lazy loading effect when there is more content. At the moment there are only a few static articles, which i've added myself.

- Real-time web
Real-time comments is added to the detail page. It doens't work 100% and I would have liked to add usersnames to the ones who comment, but I couldn't get the data in time in a database.

- Browser technologie 
I've added a few feature detections to make sure some of the used technologies work.

## Getting Started

To get this application working on your system, please follow the steps as described below.

### Prerequisites

```
- Installed node version 5+ 
```

### Installing

The first step is cloning the repository

```
git clone https://github.com/rvdpas/meesterproef.git
```

Then browse to the map and install the dependecies

```
npm install
```

Now you can start the server by entering the following command in your terminal
```
npm start
```
You should see the following message in your terminal  

![Server started](https://github.com/rvdpas/meesterproef/blob/master/public/img/server-running.png "Server started")

Visit the application in the browser on 
```
localhost:3000
```

## Built With

* [Node.js](https://nodejs.org/en/) 
* [Socket.io](https://socket.io/) 
* [EJS](http://www.embeddedjs.com/) 

## Feature list  

### Must
- [x] Generate multiple subjects for a first interest check
- [x] Show an overview of recommended stories
- [x] Save users likes in Local storage
- [x] Save users dislikes in local storage
- [x] Add sockets for real-time suggests
- [ ] Add sockets for real-time likes

### Could
- [ ] Add share to social media functionality
- [ ] login form with validation
- [x] Comment on the article
- [ ] Rate the comments on the article
- [x] Real-time comments


## Planning 
![Trello planning](https://github.com/rvdpas/meesterproef/blob/master/public/img/trello-planning.png)


### Sources     
* [Queryselector fallback](https://gist.github.com/chrisjlee/8960575) 
