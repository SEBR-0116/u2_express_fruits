const express= require('express')
const PORT = process.env.PORT || 3002
const app = express()
app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))


app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
})

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
})

app.get('/five', (req, res) => {
    res.send({
        numbers: [1, 2, 3, 4, 5]
    })
})

app.get('/fruits', (req, res) => {
        let fruits= ['mango', 'kiwi', 'honey dew', 'pineapple', 'grapes']
        res.send(fruits)
})

app.get('/fruits/:name', (req, res) => {
    let fruits= [
        {name: 'mango'},
        {name: 'kiwi'},
        {name: 'honey dew'},
        {name: 'pineapple'},
        {name: 'grapes'}
    ]
    const fruitName = req.params.name
    const fruit = fruits.find(fruit => fruit.name === fruitName)
    if (fruit) {
        res.send(fruit)
    } else {
        res.status(404).send('Fruit not found')
    }
})

app.get('/veggies', (req, res) => {
    let veggies= ['cabbage', 'carrots', 'celery', 'kale', 'potatoes']
    res.send(veggies)
})

app.get('/veggies/:name', (req, res) => {
    let veggies= [
        {name: 'cabbage'},
        {name: 'carrots'},
        {name: 'celery'},
        {name: 'kale'},
        {name: 'potatoes'}
    ]
    const veggieName = req.params.name
    const veggie = veggies.find(veggie => veggie.name === veggieName)
    if (veggie) {
        res.send(veggie)
    } else {
        res.status(404).send('Vegetable not found')
    }
})
