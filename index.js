const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))


app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  })


// /greet/:name
app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}.`)
})


// /five
app.get('/five', (requ, res) => {
    const numbers = [1, 2, 3, 4, 5]
    res.send(numbers)
})



//BONUS
app.get('/fruits/sort', (req, res) => {   
    const fruits = ['apple', 'banana', 'strawberry', 'blueberry', 'orange']

    const sortedFruits = fruits.sort((a, b) => a.localeCompare(b))

    res.send(sortedFruits.join(', '))
})


//Fruit Routes
// /fruits
app.get('/fruits', (req, res) => {
    const fruits = ['apple', 'banana', 'strawberry', 'blueberry', 'orange']
    res.send(fruits)
  })


// /fruits/:name
app.get('/fruits/:name', (req, res) => {
    const fruitName = req.params.name
    const fruits = ['apple', 'banana', 'strawberry', 'blueberry', 'orange']
    const matchingFruits = fruits.filter(fruit => fruit === fruitName)

    if (matchingFruits.length > 0) {
        res.send(matchingFruits[0])
    } else {
        res.send(`404 error, fruit not found.`)
    }
})


// /veggies
app.get('/vegetables', (req, res) => {
    const vegetables = ['carrot', 'broccoli', 'spinach', 'potato', 'cauliflower']
    res.send(vegetables)
})

app.get('/vegetables/:name', (req, res) => {
    const vegName = req.params.name
    const vegetables = ['carrot', 'broccoli', 'spinach', 'potato', 'cauliflower']
    const matchingVegetables = vegetables.filter(vegetables => vegetables === vegName)

    if (matchingVegetables.length > 0) {
        res.send(matchingVegetables[0])
    } else {
        res.send(`404 error, vegatable not found.`)
    }
})


