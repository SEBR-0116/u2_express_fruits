const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

app.get('/hello', (req, res) => {
	console.log('hello world!')
	res.send('hello world!')
})

app.get('/greet/:name', (req, res) => {
	res.send(`Why hello there, ${req.params.name}!`)
})

app.get('/five', (req, res) => {
	const five = [1, 2, 3, 4, 5]
	res.send(five)
})

app.get('/fruits', (req, res) => {
	const fruits = ['apple', 'orange', 'pear', 'strawberry', 'mango']
	res.send(fruits)
})

app.get('/fruits/sort', (req, res) => {
	const fruits = ['apple', 'orange', 'pear', 'strawberry', 'mango']
	const sortedFruits = fruits.sort((a, b) => a.localeCompare(b))
	res.send(sortedFruits)
})

app.get('/fruits/:name', (req, res) => {
	const fruits = ['apple', 'orange', 'pear', 'strawberry', 'mango']
	const fruitName = req.params.name

	// Find first fruit in the array matching 'name' param
	// If elem 'fruit' matches, return
	const matchedFruit = fruits.find((fruit) => fruit === fruitName)

	if (matchedFruit) {
		res.send(matchedFruit)
	} else {
		res.status(404).send('Fruit not found')
	}
})

app.get('/veggies', (req, res) => {
	const veggies = ['carrot', 'kale', 'spinach', 'beets', 'broccoli']
	res.send(veggies)
})

app.get('/veggies/:name', (req, res) => {
	const veggies = ['carrot', 'kale', 'spinach', 'beets', 'broccoli']

	// Extract 'name' param and convert to lowercase
	const veggieName = req.params.name.toLowerCase()

	// Find index of first vegetable in array matching param
	const veggieIndex = veggies.findIndex(
		(veggie) => veggie.toLowerCase() === veggieName
	)
	// If veggieIndex matches -1, means not found
	if (veggieIndex !== -1) {
		res.send(veggies[veggieIndex])
	} else {
		res.status(404).send('Veggie not found')
	}
})

app.get('*', (req, res) => {
	res.send('404 Not Found')
})

app.listen(PORT, () =>
	console.log(`Serving up delicious fruits on port ${PORT}🍒`)
)
