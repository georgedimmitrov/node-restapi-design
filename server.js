const express = require('express');
const app = express();

const jsonData = {count: 12, message: 'hey'};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html', (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get('/data', (req, res) => {
  res.json(jsonData);
});

app.listen(3000, () => {
  console.log('listening on 3000');
});

