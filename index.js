const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))

app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })
  app.get('/greet/:name',(req,res)=>{
  
    res.send(`Why hello there,${req.params.name}` )
})
app.get('/five',(req,res)=>{
  
    res.send([
        "1",
        "2",
        "3",
        "4",
        "5"
    ] )
})
app.get('/fruits', (req, res) => {
    //your code here 
    res.send([
        'apple',
        'banana',
        'craberry',
        'durian',
        'figs'
    ])
  })
    app.get('/fruits/:name', (req, res) => {
    const fruitName = req.params.name.toLowerCase();
    const fruits = ['apple', 'banana', 'craberry', 'durian', 'figs'];
    const matchingFruits = fruits.filter(fruit => fruit.toLowerCase() === fruitName);

    if (matchingFruits.length > 0) {
      res.send(matchingFruits);
    } else {
      res.status(404).send('Fruit not found');
    }
})
    app.get('/veggies/:name', (req, res) => {
    const veggieName = req.params.name.toLowerCase(); 
    const veggies = ['arugula.', 'broccoli', 'carrot', 'garlic.', 'celery'];
    const matchingVeggies = veggies.filter(veggie => veggie.toLowerCase() === veggieName);

  if (matchingVeggies.length > 0) {
    res.send(matchingVeggies);
  } else {
    res.status(404).send('Vegetable not found');
  }
  });

  
  app.get('/fruits/sort', (req, res) => {
    const fruits = ['apple', 'banana', 'orange', 'strawberry', 'grape'];
    
    const sortedFruits = fruits.slice().sort();
    
    res.send(sortedFruits);
  });