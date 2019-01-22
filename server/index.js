// create express app 
// set up middleware, user authentication 
const path = require('path');
const express = require('express');
const app = express();
const api = require('./server/api');
const PATH_DIR = process.env.NODE_ENV === 'production' ? 'build' : 'public';

app.use(express.json());
app.use('/api', api);
app.use(express.static(path.join(__dirname, `client/${PATH_DIR}`)));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `client/${PATH_DIR}/index.html`))
});

app.listen(3000, () => {
  console.log('Listening on Port 3000');
})