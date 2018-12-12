const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();
let server = http.createServer(app);

app.use('/', express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const url = './source/public/template.json';

app.get('/template', (request, response) => {
  const jsonText = fs.readFileSync(url);
  const template = JSON.parse(jsonText);
  response.json(template);
});

app.post('/template', (request, response) => {
  const template = request.body;
  const jsonText = JSON.stringify(template);
  fs.writeFile(url, jsonText, (error) => {
    if (!error) response.end();
  });
});

const port = process.env.PORT || 3003;
server.listen(port, () => {
  console.log('Server is running on: ' + port);
});
