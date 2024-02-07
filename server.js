const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

const fruits = [
    "Apple",
    'Pear',
    'Passion Fruit',
    'Pineapple',
    'Starfruit',
    'Watermelon',
    'Orange',
    'Grapefruit',
    'Persimmon',
    'Peach',
    'Apricot',
]

const veggies = [
    'Potato',
    'Sweet Potato',
    'Carrot',
    'Yam',
    'Broccoli',
    'Artichoke',
    'Asparagus',
    'Beetroot',
    'Cabbage',
    'Lettuce',
    'Brussel Sprout'
]

//Allows for app to listen to specified port.
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

//First argument determines the path. Just a slash means homepage
app.get('/', (req, res) => {
    res.send("Welcome to my Express Fruits! A program using Express!")
})

app.get('/greet/:name', (req, res) => {
    res.send(`Welcome, ${req.params.name}`)
})

app.get('/five', (req, res) => {
    res.send({
        fruits: fruits.slice(0,5)
    })
})

app.get('/fruits', (req, res) => {
    res.send({
        fruits: fruits
    })
})

app.get('/fruits/sort', (req, res) => {
    fruits.sort()
    console.log(fruits)
    res.send({
        fruits: fruits
    })
})

app.get('/fruits/:name', (req, res) => {
    fruits.forEach(fruit => {
        if (fruit.toLowerCase() === req.params.name.toLowerCase()) {
            res.send({
                name: fruit
            })
        }
    })
})

app.get('/veggies', (req, res) => {
    res.send({
        veggies: veggies
    })
})

app.get('/veggies/:name', (req, res) => {
    veggies.forEach(veggie => {
        if (veggie.toLowerCase() === req.params.name.toLowerCase()) {
            res.send({
                name: veggie
            })
        }
    })
})

app.get('/*', (req, res) => {
    res.send("Uhh... Error 404? Did you type something wrong?")
})