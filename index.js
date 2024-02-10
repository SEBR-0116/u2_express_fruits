const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT}🍒`))


app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
})

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
})

app.get('/five', (req, res) => {
    let fiveArray = [1, 2, 3, 4, 5]
    res.send(`${fiveArray}`)
})

const fruits = ['pomegranate', 'habanero pepper', 'pumpkin', 'ground cherry', 'tomatillo']

app.get('/fruits', (req, res) => {
    res.send(`${fruits}`)
})

app.get('/fruits/:name', (req, res) => {
    for(let i=0; i<fruits.length;i++){
    let searchedFruit = fruits.filter(req.params.name ==  fruits[i] ? res.send(`is ${req.params.name} your fruit?`) : res.send(`Fruit not found`))
    }    
})