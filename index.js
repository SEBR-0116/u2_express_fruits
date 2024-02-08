const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`))


app.get('/hello', (req, res) => {
    console.log('hello world!')
    res.send('hello world!')
  
  })

app.get('/greet/:name', (req, res) => {
    console.log('Why hello there')
    res.send('Why hello there, ${req.params.name}')
  
  })

app.get('/five', (req, res) => {
    res.send([1,2,3,4,5])
  
  }) 

app.get('/fruits', (req, res) => {
    const fruits = ["Banana", "Dragon Fruit", "Sour sap", "Mango","Pineapple","Papaya"]
    res.send(fruits)
  
  }) 

app.get('/fruits/:name', (req, res) => {
    const fruits = ["Banana", "Dragon Fruit","Sour sap", "Mango",  "Pineapple","Papaya"]
    res.send(req.params.name)
  }) 

app.get('/veggies', (req, res) => {
    const veggies = ['carrot', 'broccoli', 'spinach', 'yam', 'cauliflower'];
    res.send(veggies);
});


app.get('/veggies/:vegetable', (req, res) => {
    const { vegetable } = req.params;
    res.send(`You requested ${vegetable}`);
}); 

app.get('/fruits/sort', (req, res) => {
    const sortedFruits = fruits.slice().sort();

  res.send(sortedFruits);
});

app.get('*', (req, res) => {
    res.status(404).send('404 Not Found');
});


