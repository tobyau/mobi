// create express app 
// set up middleware, user authentication 
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

app.use("/auth", require("./auth"));
app.use("/api", require("./api"));


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});