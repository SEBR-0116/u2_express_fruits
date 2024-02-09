const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.get('/hello', (req, res) => {
    res.send('hello world!')
  
  })

app.get('/greet/:name', (req, res) => {
    res.send(`Why hello there, ${req.params.name}!`)
  
  })

  app.get('/five', (req, res) => {
    res.send([1,2,3,4,5])
  })

  app.get('/fruits', (req, res) => {
    res.send([
        "mango",
        "strawberry",
        "blueberry",
        "apple",
        "cherry"
    ])
  })

app.get('/fruits/:id', (req, res) => {
    const fruits = [ "mango", "strawberry", "blueberry", "apple", "cherry"]
    res.send((fruits[req.params.id]))
  })

  app.listen(PORT, () => {
    console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
})