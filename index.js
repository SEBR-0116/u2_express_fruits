const express = require('express')
const PORT = process.env.PORT || 3001;
const app = express()

app.get('/', (req, res) => {
  console.log('initial landing page')
  res.send('initial landing page')

})
app.get('/hello', (req, res) => {
  console.log('hello world!')
  res.send('hello world!')

})
app.get('/greet/:name', (request, response) => {
  console.log(`Hello${request.params.name}`)
  response.send({ msg: `Hello ${request.params.name}` })
})
app.get('/five', (req, res) => {
    let fiveArray = [1,2,3,4,5];
    res.send(`${fiveArray}`)
})

app.get('/fruits', (req, res) => {
    let fruits = ['apple', 'orange', 'kiwi']
    res.send(`${fruits}`)
  })

  app.get('/fruits/:name', (req, res) => {
    let fruits = ['apple', 'orange', 'kiwi']
    res.send(fruits[req.params.name])
  })

  app.get('/veggies/:name', (req, res) => {
    let veggies = ['carrot', 'lettuce', 'kale']
    res.send(veggies[req.params.id])
  })

  app.get('*', (req, res) => {
    res.send('404 Not Found')
  })
  
  app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))