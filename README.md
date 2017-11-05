# Art Historian

## Introduction

This is a web app for displaying and adding data on pieces of art.

### Technical Overview

The project can be broken down into 3 major parts:

- client: single page application with Angular 1.6
- server: serves static assets and api requests for art pieces
- database: holds the art pieces data using Mongodb

### Glossary

- *Mongodb*: the database manager that stores the data
- *document*: An entry in the database. Equivalent of a javascript object stored inside mongodb. In this case, each "Card" is a document
- *Mongoose*: the helper library that connects to Mongodb and facilitate storing and getting data between the server and the database. Think of it as a middleman between Node and Mongodb
- *Express*: web server framework for Nodejs. It makes things like defining serving static files and dynamic API requests easier
- *Angular*: client-side (code running in visitor's browser) framework making writing a single page application easier and more organized
- *$http*: an angular helper service that does http requests and return a promise that is either rejected or fulfilled based on whether the request was completed successfully

## Getting Started

1. Download and set up Mongodb (https://docs.mongodb.com/manual/tutorial/getting-started/)
2. `npm install` to install project dependencies
3. `mongod` to start mongodb
4. `npm start` to start the web server

## Project Architecture

- *package.json*: specifies project dependencies
- *server*: folder containing server related code
    - *app.js*: creates an Express server. Serve up static files for everything inside the 'public' folder. Define routes for handling ajax requests for '/cards'.
    - *connect.js*: tell Mongoose to connect to the specified Mongodb database. Mongoose is how the server is connected and can talk with the database
    - *models.js*: define a Mongoose model called `Card`. This is so that Mongoose can know how to convert the Mongodb document to and from javascript object
- *public*: folder containing client related code
    - *index.html*: the html page served to the client when visiting the site
    - *components*: folder for angular code
        - *app.js*: define `ArtHistorian` angular module, define a component `cardForm` with controller that handles submitting a new art piece
        - *card.js*: define `cardFlip` component with controller that handles flipping the card and deleting the card
        - *cardlist.js*: define `cardList` component with controller that does a `GET` request for the cards data on load
## What happens when the app loads

1. When running `mongod`, Mongodb spins up and is listening to port 27017 (default port) on the computer. This way, when the server tries to connect to this port, it can. (see the message in the terminal when running this command)

1. When running `npm start` (defined inside package.json), run `nodemon server/app.js` which runs app.js. App.js initiates a Express server and also requires 'connect.js' which connects to the Mongodb database.

1. When someone visits [http://localhost:3000](http://localhost:3000), the browser does a document request to the server. The server defined that everything inside the 'public' folder are treated as static files that can be served up. In this case, the server serves up index.html by default, which is returned to the client.

1. The client parses index.html, requesting additional client javascript files. The server looks for these files inside the 'public' folder (because it's been configured to) and serve them up.

1. The javascript files are loaded, loading the angular app.

1. The `CardList` component's controller does a `GET` ajax request to `/cards`. The server sees the request and handles it by using Mongoose to tell Mongodb to return the list of cards. The server returns status code 200 and return this list of cards as the response. The angular code takes the response data and display the cards on the page

1. When user enters a new art and clicks submit, the client code does an ajax `POST` request to `/cards` with the data. The server handles the request by using Mongoose to tell Mongodb to store this as a new card. The server returns 201 for a successful `POST` request.
