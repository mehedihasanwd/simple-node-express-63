const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from node server");
});

const users = [
  { id: 1, name: "Aarif", email: "aarif@gmail.com" },
  { id: 2, name: "Rayhan", email: "rayhan@gmail.com" },
  { id: 3, name: "Aabir", email: "aabir@gmail.com" },
  { id: 4, name: "Farhan", email: "farhan@gmail.com" },
  { id: 5, name: "Mahfuz", email: "mahfuz@gmail.com" },
  { id: 6, name: "Rocky", email: "rocky@gmail.com" },
  { id: 7, name: "Razu", email: "razu@gmail.com" },
  { id: 8, name: "Adnan", email: "adnan@gmail.com" },
  { id: 9, name: "Ahnaf", email: "ahnaf@gmail.com" },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  // use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  res.send("inside post");
  res.json(newUser);
});

// Dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["Mangoes", "Bananas", "Apple", "Orange", "Olive"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("This is so tasty");
});

app.listen(port, () => {
  console.log("Listening to port:", port);
});
