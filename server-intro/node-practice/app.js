const http = require("http");
const port = process.env.port || 4000;

// Here we will use .createserver method to accpet our request and response
http
  // The Create server method creates a server on your computer


  
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    // ADD ROUTES

    const url = req.url;

    if (url === "/profile") {
      res.write("<h1> Welcome to your Profile! </h1>");
      res.write("<h1> You are amazing! </h1>");
      res.write("<h1> You are 22 years old </h1>");
    } else if (url === "/job") {
      //SEND JSON EXAMPLE

      const work = {
        address: {
          street: "Red ventures",
          city: "Charlotte NC",
        },
      };


      // res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(work));
      res.end();
    } else {
      res.write("<h1>HELLO Cohort 14! Lets keep pushing we got this! </h1>");
      res.end();
    }
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });


  // control + c to get out of server
 


  // make sure to do 

  // Node.js v20.10.0
// jessicacontrerasayala@adminisatorsmbp server-intro % ls             
// node-practice
// jessicacontrerasayala@adminisatorsmbp server-intro % cd node-practice 
// jessicacontrerasayala@adminisatorsmbp node-practice % pwd
// /Users/jessicacontrerasayala/Desktop/server-intro/node-practice
// jessicacontrerasayala@adminisatorsmbp node-practice % node app.js
// Server listening on port 4000...
  ///
  //

  ///


  //BUILDING A SERVER WITHOUT EXPRESS 

//1. We want to build a req.url which will give us acess to our user url in out local host 
//2. then we write a conditional to access our "Profile Data" or "Job" Information etc. 
//3. then we will end the program with the end.() method 
//4. Folowing that we will create our url to navigate what we want to acces in our JSON Data which we be called "work"
//5. Use the JSON.stringify method to convert Javascript values into JSON Strings
//6. Create a Listen port