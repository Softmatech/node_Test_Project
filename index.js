// const express = require("express");
// const app = express();
// app.use(express.json());
// var bodyParser = require("body-parser");
//
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
//
// const users = [
//   { id: 1, firstName: "Joseph", lastName: "Andy Feidje", language: "Java" },
//   { id: 2, firstName: "Jose", lastName: "Getro", language: "Ruby on Rails" },
//   { id: 3, firstName: "Joseph", lastName: "Julio Fils", language: "Python" },
//   { id: 4, firstName: "Louis", lastName: "Martine", language: "JavaScript" },
//   { id: 5, firstName: "Jean", lastName: "Robert", language: "Swift" }
// ];
// // to retrieve all users
// app.get("/api/users", (req, res) => {
//   res.send(users);
// });
//
// //get specific user by id
// app.get("/api/users/:id", urlencodedParser, (req, res) => {
//   const user = users.find(c => c.id === parseInt(req.params.id));
//   if (!user) res.status(404).send("ID  not found");
//   res.send(user);
// });
//
// //to create a user
// app.post("/api/users", (res, req) => {
//   const user = {
//     id: users.length + 1,
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     language: req.body.language
//   };
//   users.push(user);
//   res.send(user);
// });
//
// app.listen(3000, () => console.log("Listening on port 3000...."));

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.use(express.static('public'));
// app.get('/index.htm', function (req, res) {
//    res.sendFile( __dirname + "/" + "index.htm" );
// })

app.post("/api/users", urlencodedParser, function(req, res) {
  // Prepare output in JSON format
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
