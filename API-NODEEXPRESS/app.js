/*

INSTALL
npm i axios
npm i dotenv       // to load envorinement variables 
npm i express
npm i nodemon 
npm init          //* initalize a json file, can also use -y .. handles our modules with versions

/// express is a framework for node.js helps us design programs with API's

-----STEPS WHEN CREATING OUR SERVER WITH EXPRESS------------
1. Installed Nodemon npm i nodemon this will have our server updating whothout having to close it 
2. Import our Packages called Express, Nodemon , Axios , FS, Dotenv
3. We then use our Dotenv to use our Express Imports as well as our port and API KEYS 
4. We then create our ROUTES to naivigate through our Local Host URL


------METHODS AND DEFINITONS WE USE---------

* Axios is a Javascript library that implements the Promise API, 
which is native to JS ES6 and is used to make HTTP requests from node. js 
or XMLHttpRequests from the browser.

*A dotenv file (.
Dotenv files are used to load environment variables from a . env file into the running process.

*The Node.js file system module allows you to work with the file system on your computer.
 To include the File System module, use the require() method:

*req. param() searches the URL path, body, and query string of the request (in that order) for the specified parameter.
  If no parameter value exists anywhere in the request with the given name ,
  it returns undefined or the optional defaultValue if specified.

  *The server.listen() is an inbuilt application programming interface of class Socket within tls module
   which is used to start the server to listen the encrypted connection.

   *The keyword async before a function makes the function return a promise:

*/


// https://www.freecodecamp.org/news/how-to-use-the-javascript-require-function/#:~:text=require()%20vs%20import()%20Functions&text=The%20two%20major%20differences%20are,the%20beginning%20of%20the%20file.
//import the modules we installed
// do not use 'required' it can be called anwywhere in the program, and import can only be used conditionally 
// depending on where it is on the program, specific to placement unlike 'required'
import fs from "fs";
import express from "express";
import axios from "axios";
import * as dotenv from "dotenv"; // function expression to run asynchrous with * as


// call our packages 

dotenv.config();
const app = express(); 
const port =5000;
// variable for API key
const apiKey = process.env.APIKEY;

// Here we will create our routes for our GET request to receive our data
// **use are fs , to read our files // read our html files


// ----COMMANDS-------------
// GET requests can be cached
// GET requests remain in the browser history
// GET requests can be bookmarked
// GET requests should never be used when dealing with sensitive data
// GET requests have length restrictions
// GET requests are only used to request data (not modify)

// 1st page index.html
// routing of our url to the html pages.. always need slash /
app.get("/", (req, res) =>  { //getting the url path of slash / ... Get,create,delete,update..CRUD..

  fs.readFile("./index.html",(err,data)=> {
    res.write(data); //read data
    res.end();       // end data
  });
});

// 2nd page fun.html 
app.get("/api", (req, res) =>  {

  fs.readFile("./fun.html",(err,data)=> {
    res.write(data); //read data
    res.end();       // end data
  });
});


// HERE we create a route url for our API 
// //to access the DATA, 
app.get("/api/news/:country/:category", async (req, res) => {

  // request parameters(info on readme.md file) by country
const country = req.params.country;
const category = req.params.category;
let response;
  response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
  );
  const artPointer = Math.floor(Math.random() * response.data.articles.length);
  res.status(200).json(response.data.articles[artPointer]);
}) 

// connect our port
// if error then throw an arrow
app.listen(port, (err) => {
  if(err) throw err; 
  console.log(`listening on port ${port}`);

})

// go on terminal and type: node app.js.. and say listening on port 5000




