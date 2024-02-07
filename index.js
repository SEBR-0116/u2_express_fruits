const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/hello', (req, res) => {
  console.log('hello world!')
  res.send('hello world!')

})

// name
app.get('/greet/:name', (req, res) => {
  res.send(`Why hello there ${req.params.name}`)
})

// numbers
app.get('/five', (req, res) => {
  const five = [1, 2, 3, 4, 5]
  res.send(five)
})

// fruits
app.get('/fruits', (req, res) => {
  const fruit = ['strawberries', 'pears', 'dragon fruit', 'blue berry', 'apples']
  res.send(fruit)
})

app.get('/fruits/:name', (req, res) => {
  const fruitArray = ['strawberries', 'pears', 'dragon fruit', 'blue berry', 'apples']
const fruits = req.params.name

if(fruitArray.includes(fruits)) {
  res.send(`You have selected ${fruits}!`)
} else {
  res.send(`Fruit is not on this list!`)
}
})

// veggies
app.get('/veggies', (req, res) => {
  const veggies = ['carrots', 'parsnips', 'beets', 'potatoes', 'celery']
  res.send(veggies)
})

app.get('/veggies/:name', (req, res) => {
  const veggieArray = ['carrots', 'parsnips', 'beets', 'potatoes', 'celery']
const veggies = req.params.name

if(veggieArray.includes(veggies)) {
  res.send(`You have selected ${veggies}!`)
} else {
  res.send(`Veggie is not on this list!`)
}
})


app.get('/*', (req, res) => {
  res.send('404 error, file not found!')
})

