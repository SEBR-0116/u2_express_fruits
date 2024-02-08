const express = require('express')//engine running 
const PORT = process.env.PORT || 3001 //you can defied what port do you want to use 

const app = express()//run the library of express every time that you use app it will pull up everything on the express library


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })
// get the greeting message //
  app.get('/greet/:name', (req, res) => {
    res.send(`Hello there, ${req.params.name}!`)
})
app.get('/five', (req, res) => {

    res.send([...Array(6).keys()].slice(1))
   //an array in JavaScript is actually an object with keys that are integers. The code spreads the keys of an array of length 6 to another array.
//The slice method returns the second through the last element.
})


app.get('/fruits', (req, res) => {
    const fruits =['Straberry','Pineapple','Mango','Water Melon','Orange','Apple','Bannana']
    res.send(fruits)
  })

  app.get('/fruit/:name', (req, res) => {
    const fruits =['Strawberry','Pineapple','Mango','Water Melon','Orange','Apple','Bannana']
    const fruitName =req.params.name.toLocaleLowerCase()
    const fruit =fruits.find(fruit => fruit.toLocaleLowerCase() === fruitName) 

   if(fruit){
    res.send(fruit)
   } else{
    res.status(404).send('Sorry, we do not have that fruit.')
   }

  })

app.get('/veggie',(req,res) => {
    const veggies =['Lettuce','Broccoli','Cauliflower','Celery','Cabbage','Onio','Carrots','Potatoes','Asparagus']
    res.send(veggies)
})
app.get('/veggie/:name',(req,res) => {
    const veggies =['Lettuce','Broccoli','Cauliflower','Celery','Cabbage','Onio','Carrots','Potatoes','Asparagus']
    const veggieName =req.params.name.toLocaleLowerCase()
    const veggie =veggies.find(veggies => veggies.toLocaleLowerCase() === veggieName) 

   if(veggie){
    res.send(veggie)
   } else{
    res.status(404).send('Sorry, we do not have that veggie.')
   }
})

app.get('/fruits/sort', (req, res) => {
    const fruits =['Straberry','Pineapple','Mango','Water Melon','Orange','Apple','Bannana']
    res.send(fruits.sort())
  })
  app.get('/veggies/sort',(req,res) => {
    const veggies =['Lettuce','Broccoli','Cauliflower','Celery','Cabbage','Onio','Carrots','Potatoes','Asparagus']
    res.send(veggies.sort())
})

app.get('*', (req, res) => {
    res.send('404 Not Found')
  })
