// const app = require('express')();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`live on http://localhost:${PORT}`));

app.use(express.json());

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: 'knightface',
    size: 'large',
  });
});

app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    res.status(418).send({ message: 'We need a name' });
  }

  res.send({
    tshirt: `Name: ${name}  from post id: ${id}`,
  });
});

app.get('/tahseen', (req, res) => {
  res.status(200).send({
    body: 'Hi yes my name is tahseen',
  });
});

app.get('/', (req, res) => {
  res.status(200).send({
    body: 'Welcome to the home screen of the API',
  });
});
