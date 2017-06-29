# Meesterproef - Persgroep application

In this repository, you will find the code for De Persgroep application.
De Persgroep is a leading publisher of national, regional and local news brands, magazines, websites and is active on radio. The goal of this project is to create a app for a younger group of future writers. This app will give them the chance to create content younger people enjoy based on their interests. In the app users can write and read stories they think are relevant for their target audience. The whole idea behind this that young writers get the opportunity to create the content for the young readers.

## live link
[live](http://4d2a9661.ngrok.io/) 

## Concept
The concept is to involve younger to people to create news that they think is important. Yonger people know what they like and what they don't like. This way they are their own target audience. In the application you can add topics that you are interested in. After you've selected them, content will appear with that topic. Users can see how the aricle is doing by the amount of likes that it has. They have the ability to read the news, by going to the detail page. Here they like the article and suggest it to other readers. If an article gets recommended a lot it will appear on the other users page.

## Vakken voor de beordeling
- Web App From Scratch 
Ik heb de applicatie zoveel mogelijk als een web app geprobeerd te bouwen, zodat er zo min mogelijk pagina's zijn. Ik had mijn code nog object oriented willen schrijven.

- Css To The Rescue
Gebruik gemaakt van moderne technieken als flexbox. Ik had nog willen experimenteren met Css grids en variables

- Performance matters
De pagina is geoptimaliseerd door het gebruik van g-zip. Ik had graag lazy loading willen toepassen, maar de content die ik momenteel heb is statisch en dus altijd hetzelfde.

- Real-time web
Ik heb geprobeerd de suggesties real-time te maken, maar heb dit helaas niet helemaal kunnen afronden zoals ik het wilde. Ik had ook graag de likes real-time gemaakt. Momenteel wordt het opgeslagen in localstorage ipv een database.

## Getting Started

To get this application working on your system, please follow the steps as described below.

### Prerequisites

```
- Installed node  
- A code editor  
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
- [ ] Comment on the article
- [ ] Rate the comments on the article
- [ ] Real-time comments

## Planning

[Trello](https://trello.com/b/lavTOTYF) 
