# Inflorescence / Mod 2 Project

This is my Mod2 project for the PerScholas Software Engineering course.

Click [here][1] for the live site link to my store.

## Project Description
***
For the Per Scholas Module 2 Project, we are tasked with creating an app that emulates a store of our creation. I decided to build a website that sells arrangement of flowers.

## Brief Example
***
[![Watch the video](/public/media/home.jpg)](https://vimeo.com/740217752)

## Routes
***

   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /api/v1/login | login page  |
POST | /api/v1/login | authenticates and logs a user in |
GET | /api/v1/logout | logs a  user out |
GET | /api/v1/signup | signup page  |
POST | /api/v1/signup | creates a new user |
GET | /api/v1/ | home page  |
GET | /api/v1/flor/ | index showing all flower arrangements |
GET | /api/v1/flor/:id | show page for selected flower arrangement |
GET | /api/v1/flor/new | page to add flower product |
POST | /api/v1/flor/ | add a flower product |
GET | /api/v1/flor/:id/edit | page to edit a flower product |
PUT | /api/v1/flor/:id | edit/update a flower product |
DELETE | /api/v1/flor/:id | delete a flower product|

## Approach Taken
So, I mostly followed the code from our Pokemon project to implement the 7 required routes. For the login and sign up routes I looked for outside resources. Specifically [this][2] youtube video was helpful in understanding the logic behind sign up and login routes.

## Unsolved Problems
***
As of now the cart routes are not implemented because I was not able to complete the functionality of such a feature. There is a cart.jsx and cart schema, but they aren't being used at the current stage of the project. 


## User Stories
***
* User is able to create a user
* User is able to log in
* User is able to log out
* User is able to create a new product
* User is able to edit a product
* User is able to delete a product
* User is able to view the index and home page
* User is able to click on a product in the index page and view the single product in greater detail

## Technologies Used
***
* HTML5
* CSS
* Javascript
* NodeJS
* MongoDB

### NPM Packages Installed
* nodemon
* react
* express
* mongoose
* dotenv
* method-override
* bcrypt
* cookie-parser
* jsonwebtoken
* json

## Installation
***
Fork and clone the repository
```
$ git clone https://github.com/yourusername/repositoryname
```
Go to the project directory
```
$ cd repositoryname
```
Install dependencies
```
$ npm i
```
Run nodemon and open local host in browser to see the project
```
$ nodemon
```

## Future Plans
***
I wanted to include more features in this app, but due to the time constraint I was not able to completely figure out how to implement certain features.

#### Authentication
* Make the distinction between an admin and a regular user.
   * So, any admin features like the option to create, delete and edit a product would be hidden from a regular user.

#### Cart
* Add functionality to the 'add to cart' button and include cart routes.
   * As of now, the add to cart button does not do anything and the cart routes are commented out in server.js. But, I am really close in achieving this feature.

#### Profile page
* Profile page that would allow a user to edit their username, name and password as well as seeing the past history of their purchases. 

#### Index
* Include a search bar and filter option in the Index when navigating through the products. 

[1]:https://inflorescence123.herokuapp.com "live site"
[2]:https://www.youtube.com/watch?v=SnoAwLP1a-0&list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp "youtube link"
