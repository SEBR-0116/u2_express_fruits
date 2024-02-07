const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT,  () => {
    console.log(`Serving up delicious fruits on port ${PORT}`)
})


app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })

app.get('/greet/:name',(req,res) => {
    res.send(`Why hello there, ${req.params.name}!`)
})

app.get('/five',(req,res) => {
    let numArray = [1,2,3,4,5,]
    res.send(`Why hello there, ${numArray}!`)
})

app.get('/fruits', (req, res) => {
    let fruitArray = ["Pineappale","Kiwi","Woodapple","Banana","Grape Furit","Dragon Furit"]
    console.log(`Before sorting : ${fruitArray}`)
    res.send(fruitArray.sort())
  })

  let veggyArray = ["Dumpstick","Lotus Root","Green Beens","Pumpkin","Garlic","Radish","White Potato","Yellow Potato","Zucchini"]

  app.get('/veggies', (req, res) => {
    
    console.log(`Before sorting : ${veggyArray}`)
    res.send(veggyArray.sort())
  })

  app.get('/veggies/:furitNumber',(req,res) => {

        res.send(`You have choosen veggi no. ${req.params.furitNumber} is ${veggyArray[req.params.furitNumber-1]}`)
  })