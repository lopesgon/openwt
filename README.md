# Open Web Technology - A simple list of boats

A web application made of two pages: an authentication page and an authenticated page to display a list of boats.

## Prerequisites

In order to be able to run this small web application, you may have pre-installed:

* [Node.js](https://nodejs.org/en/) - Node.js server
* [NPM](https://www.npmjs.com) - Node Package Manager
* [MySQL](https://dev.mysql.com/downloads/) - MySQL 

## Installing

Before running project, install all dependencies by going to the root directory of the project and run the following command lines:

```
npm install
bower install
```

Then, the database, tables and rows have to be imported. Go to MySQL UI or from terminal and import ```mysql-db-generation.sql``` file. 

Once previous steps done, go to ```bin``` folder and run ```node www```.

You can access to the server on a browser at the url ```http://localhost:3000```.