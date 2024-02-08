const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
  console.log(`Express server listening on port`)
})

app.get('/hello', (req, res) => {
  console.log('hello world!')
  res.send('Hello World!')
})

// //greet/:name
app.get('/greet/:name', (req, res) => {
  res.send(`Why hello there, ${req.params.name}`)
})

// /five
app.get('/five', (req, res) => {
  const arr = [1, 2, 3, 4, 5]
  res.send(arr) 
})

// /fruits
app.get('/fruits', (req, res) => {
  const fruits = ['blueberry', 'apple', 'orange', 'pear', 'mango']
  res.send(fruits)
})

// /fruits/:name
app.get('/fruits/:name', (req, res) => {
  const fruits = ['blueberry', 'apple', 'orange', 'pear', 'mango']
  const name = req.params.name
  if (fruits.includes(name)) {
    res.send(name)
  }
})


// /veggies
// a route that returns an array of vegetables
app.get('/veggie', (req, res) => {
  const veggies = ['Carrot', 'Broccoli', 'Spinach', 'Potato', 'Cucumber'];
  res.send(veggies)
})

// create a route for the individual ones
// (case sensitive)
app.get('/veggie/:name', (req, res) => {
  const veggies = ['Carrot', 'Broccoli', 'Spinach', 'Potato', 'Cucumber'];
  const name = req.params.name
  if (veggies.includes(name)) {
    res.send(name)
  }
})
