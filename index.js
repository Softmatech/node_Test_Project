const express = require("express");
const app = express();
app.use(express.json());
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ limit: "10mb" }));

const users = [
  { id: 1, firstName: "Joseph", lastName: "Andy Feidje", language: "Java" },
  { id: 2, firstName: "Jose", lastName: "Getro", language: "Ruby on Rails" },
  { id: 3, firstName: "Joseph", lastName: "Julio Fils", language: "Python" },
  { id: 4, firstName: "Louis", lastName: "Martine", language: "JavaScript" },
  { id: 5, firstName: "Jean", lastName: "Robert", language: "Swift" }
];
// to retrieve all users
app.get("/api/users", (req, res) => {
  res.send(users);
});

//get specific user by id
app.get("/api/users/:id", (req, res) => {
  const user = users.find(c => c.id === parseInt(req.params.id));
  if (!user) res.status(404).send("ID  not found");
  res.send(user);
});

//to create a user
app.post("/api/users", (res, req) => {
  const user = {
    id: users.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    language: req.body.language
  };
  users.push(user);
  res.send(user);
});

app.listen(3000, () => console.log("Listening on port 3000...."));
