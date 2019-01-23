// create express app 
// set up middleware, user authentication 
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const db = require('./db');

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

db.sync().then(() => console.log("tables created!"));

app.listen(3000, () => {
  console.log('Listening on Port 3000');
});