// Express Boilerplate
const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()
app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

// Terminal: npm run dev

// Basic Routes
app.get('/hello', (req, res) => {
    console.log('Hello there!')
    res.send('Hello there!')
})
app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
})
app.get('/five', (req, res) => {
    let numbers = [1, 2, 3, 4, 5]
    res.send(`${numbers}`)
})

// Fruit Routes
app.get('/fruits', (req, res) => {
    res.send({
       fruits: ['pineapple', 'grape', 'pear', 'strawberry', 'banana', 'mango']
    })
})
app.get('/fruits/:id', (req, res) => {
    let fruits = ['pineapple', 'grape', 'pear', 'strawberry', 'banana', 'mango']
    res.send(fruits[req.params.id])
})

// Vegetable Routes
app.get('/vegetables', (req, res) => {
    res.send({
       vegetables: ['carrot', 'corn', 'broccoli', 'lettuce', 'eggplant', 'potato']
    })
})
app.get('/vegetables/:id', (req, res) => {
    let vegetables = ['carrot', 'corn', 'broccoli', 'lettuce', 'eggplant', 'potato']
    res.send(vegetables[req.params.id])
})