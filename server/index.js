// create express app 
// set up middleware, user authentication 
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { User } = require('./db/models');

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

app.use("/api", require("./api"));

User.sync().then(() => console.log("tables created!"));

app.listen(3000, () => {
  console.log('Listening on Port 3000');
})