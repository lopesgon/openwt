# Open Web Technology - A simple list of boats

A web application made of two pages: an authentication page and an authenticated page to display a list of boats.

## Prerequisites

In order to be able to run this small web application, you may have pre-installed:

* [Node.js](https://nodejs.org/en/) - Node.js server
* [NPM](https://www.npmjs.com) - Node Package Manager
* [MySQL](https://dev.mysql.com/downloads/) - MySQL

## Installing

Firstly, install all dependencies by going to the root directory of the project and run the following command lines:

```
npm install
bower install
```

Secondly, you have to import the database script ```mysql-db-generation.sql``` into your MySQL. 

Thirdly, update the database configuration file ```config/database.js``` regarding to your MySQL settings (user, password, port, etc..).

Once steps above done, go to ```bin``` folder and run ```node www```.
You can access to the server on a browser at the url ```http://localhost:3000```.