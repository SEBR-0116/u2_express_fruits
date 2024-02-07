const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Express server working at port ${PORT}`);
});

app.get("/hello", (req, res) => {
  console.log("hello world!");
  res.send("hello world!");
});

app.get("/greet/:name", (req, res) => {
  res.send(`Why Hello there, ${req.params.name}!`);
});

app.get("/five", (req, res) => {
  res.send({
    numbers: [1, 2, 3, 4, 5],
  });
});

app.get("/fruits", (req, res) => {
  res.send({
    fruits: ["Orange", "Banana", "Apple", "Pear"],
  });
});

app.get("/fruits/:name", (req, res) => {
  res.send({
    fruits: `your favorite fruit probably is  ${req.params.name} Fair Choice my friend`,
  });
});

app.get("/veggies", (req, res) => {
  res.send({
    veggies: ["Broccoli", "Beetroot", "Cabbages", "Carrots"],
  });
});

app.get("/veggies/:name", (req, res) => {
  res.send({
    veggies: `your favorite vegetable probably is  ${req.params.name} Fair Choice my friend`,
  });
});
