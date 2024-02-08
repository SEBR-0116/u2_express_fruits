const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })

  app.get(`/greet/:name`, (req, res) => {
    console.log(`why hello there, ${req.params.name}!`)
    res.send(`why hello there, ${req.params.name}!`)
    })
    app.get('/five', (req, res) => {
        const five = [1, 2, 3, 4, 5]
        console.log(five)
        res.send(five)
    })

    app.get(`/fruits` , (req, res) => {
        const fruits = ['apple', 'banana', 'cherry','grape', 'blueberry']
        console.log(fruits)
        res.send(fruits)
    } )

    app.get(`/fruits/:name`, (req, res) => {
        const fruits = ['apple', 'banana', 'cherry', 'grape', 'blueberry']
        const fruitName = req.params.name
        if (fruits.includes(fruitName)) {
            console.log(`I love to eat ${fruitName}`)
            res.send(`I love to eat ${fruitName}`)
        } else {
            console.log(`Sorry, ${fruitName} is not in the list of available fruits.`)
            res.send(`Sorry, ${fruitName} is not in the list of available fruits.`)
        }
    })