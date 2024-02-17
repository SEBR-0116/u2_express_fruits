// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;




app.get('/hello', (_req, res) => {
  console.log('hello world!');
  res.send('hello world!');
});


app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Why hello there, ${name}!`);
});


app.get('/five', (req, res) => {
  const numbers = [1, 2, 3, 4, 5];
  res.send(numbers);
});

app.get('/fruits', (req, res) => {
  const fruits = ['apple', 'banana', 'orange', 'strawberry', 'grape'];
  res.send(fruits);
});

app.get('/fruits/:name', (req, res) => {
  const fruitName = req.params.name;
  const fruits = ['apple', 'banana', 'orange', 'strawberry', 'grape'];
  const fruit = fruits.find(fruit => fruit === fruitName);
  if (fruit) {
    res.send(fruit);
  } else {
    res.status(404).send('Fruit not found');
  }
});


app.get('/veggies', (req, res) => {
  const veggies = ['carrot', 'lettuce', 'broccoli', 'spinach', 'potato'];
  res.send(veggies);
});

app.get('/veggies/:name', (req, res) => {
  const veggieName = req.params.name;
  const veggies = ['carrot', 'lettuce', 'broccoli', 'spinach', 'potato'];
  const veggie = veggies.find(veggie => veggie === veggieName);
  if (veggie) {
    res.send(veggie);
  } else {
    res.status(404).send('Vegetable not found');
  }
});

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`));



