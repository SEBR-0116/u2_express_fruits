const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))


app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })

  app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}`)
  
  })

  app.get('/five', (req, res) => {
    res.send([1, 2, 3, 4, 5])
  
  })

  app.get('/fruits', (req, res) => {
    res.send({fruits: [
        "pineapple",
        "banana",
        "fig",
        "grapes",
        "plums",
        "peach",
        "pear",
        "watermelon",
        "kiwi",
        "cantalope",
        "melon",
        "apple"
    ]})
})

app.get('/fruits/sort', (req, res) => {
    let fruits = [
        "pineapple",
        "banana",
        "fig",
        "grapes",
        "plums",
        "peach",
        "pear",
        "watermelon",
        "kiwi",
        "cantalope",
        "melon",
        "apple"]
    res.send({fruits:
        fruits.sort()
    })
  })


app.get('/fruits/:name', (req, res) => {
    res.send(`I want to get some ${req.params.name}`)
  })

  app.get('/veggies', (req, res) => {
    res.send({
        veggies: [
            "broccoli",
            "carrots",
            "cabbage",
            "lettuce",
            "green onions",
            "asparagus",
            "artichoke",
            "garlic",
            "leeks",
            "kale",
            "mushrooms"
        ]
    })
})

app.get('/veggies/:name', (req, res) => {
    res.send(`I like to eat ${req.params.name}`)
  })


  app.get('*', (req, res) => {
    res.send('404 Not Found')
  })