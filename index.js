const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

let nums=[1,2,3,4,5]

let fruits=['apple', 'orange', 'pineapple','plum']

let veggies=['artichoke', 'arugula', 'asparagus', 'corn','beets','eggplant','avocado']


app.listen(PORT, () =>
  console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
);

app.get("/hello", (req, res) => {
  console.log("hello world!");
  res.send("hello world!");
});

app.get("/greet/:name", (req, res) => {
  res.send(`Why hello there, ${req.params.name}`);
});

app.get("/five", (req, res) => {
    res.send(nums);
  });

  app.get('/fruits/sort', (req, res) => {
    // implement sort

    res.send(fruits.sort())
  })

  app.get("/fruits", (req, res) => {
    res.send(fruits);
  });

  app.get("/fruits/:name", (req, res) => {
    let fruit=req.params.name
    if (fruits.includes(fruit)){
        res.send(`Here is the ${fruit} that you asked for`)
    }
    else res.send(`Sorry, we do not have any ${fruit}s`)
  });
  app.get("/veggies", (req, res) => {
    res.send(veggies);
  });

  app.get("/veggies/:name", (req, res) => {
    let veggie=req.params.name
    if (veggies.includes(veggie)){
        res.send(`Here is the ${veggie} that you asked for`)
    }
    else res.send(`Sorry, we do not have any ${veggie}s`)
  });


  app.get('*', (req, res) => {
    res.send('404 Not Found')
  })
