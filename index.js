const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

app.listen(PORT, () => {
    console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
})

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
})

app.get('/greet/:name', (req, res) => {
    res.send({msg:`Why hello there, ${req.params.name}!`})
})

app.get('/five', (req, res) => {
    res.send([1, 2, 3, 4, 5])
})

app.get('/fruits', (req, res) => {
    res.send(['apple', 'banana', 'kiwi', 'grapes', 'strawberry', 'blackberry', 'raspberry', 'mango', 'orange', 'lemon'])
})

const fruits = ['apple', 'banana', 'kiwi', 'grapes', 'strawberry', 'blackberry', 'raspberry', 'mango', 'orange', 'lemon']

app.get('/fruits/:name', (req, res) => {
  const { name } = req.params
  const fruit = fruits.find(fruit => fruit.toLowerCase() === name.toLowerCase())

  if (fruit) {
    res.send(fruit)
  } else {
    res.status(404).send('Fruit not found')
  }
})

app.get('/fruits', (req, res) => {
  res.send(fruits)
})

app.get('/veggies', (req, res) => {
    res.send(['broccoli', 'asparagus', 'cauliflower', 'carrot', 'peas', 'brussel sprouts', 'artichoke'])
})

const veggies = ['broccoli', 'asparagus', 'cauliflower', 'carrot', 'peas', 'brussel sprouts', 'artichoke']

app.get('/veggies/:name', (req, res) => {
  const { name } = req.params

  const veggie = veggies.find(veggie => veggie.toLowerCase() === name.toLowerCase())

  if (veggie) {
    res.send(veggie)
  } else {
    res.status(404).send('Veggie not found')
  }
})

app.get('/veggies', (req, res) => {
  res.send(veggies);
})
