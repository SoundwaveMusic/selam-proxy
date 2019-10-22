const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3059;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname,'..','public')));

app.get('/', (_, response) => {
  response.send(express.static(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log('Proxy server is up and running on port', port);
});
