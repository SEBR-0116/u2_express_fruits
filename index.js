const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

const fruitsArray = [ "apples", "oranges", "pineapples"]

const veggiesArray = [ "broccoli", "cauliflower", "peas"]



app.listen(PORT, () => {
    console.log(`Serving up delicious fruits on port ${PORT} 🍒 `)
})

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
})

app.get('/greet/:name', (req, res) => {
    console.log(req.params)
    res.send(`Why Hello there, ${req.params.name}`)
})

app.get('/five/:numbers', (req, res) => {
    res.send({
        numbers: ["1", "2", "3", "4", "5"]
    })
})

app.get('/fruits', (req, res) => {
    const fruits = [ "apples", "oranges", "pineapples"]
    res.send({
        fruits
    })
})

app.get('/fruits/:name', (req, res) => {
    console.log(req.params)
    const fruitsName = req.params.name;
    if (fruitsArray.includes(req.params.name)) {
        res.send( req.params.name + ' is in the list of fruits')
      } else {
        res.send('The fruit name you looked for, is not in the list of fruits');
      }
  })

  app.get('/veggies', (req, res) => {
    const veggies = [ "broccoli", "cauliflower", "peas"]
    res.send({
        veggies
    })
})

app.get('/veggies/:name', (req, res) => {
    console.log(req.params)
    const veggiesName = req.params.name;
    if (veggiesArray.includes(req.params.name)) {
        res.send( req.params.name + ' is in the list of veggies')
      } else {
        res.send('The veggies name you looked for, is not in the list of veggies');
      }
  })