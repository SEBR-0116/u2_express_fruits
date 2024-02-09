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
    let array = [1, 2, 3, 4, 5]
    res.send(array)
})

let fruits = ['lychee', 'dragon fruit', 'mangoustine']

app.get('/fruits/sort', (req, res) => {
    res.send(`${fruits.toSorted()}`)
})

app.get('/fruits/:name', (req, res) => {
    if (fruits.includes(req.params.name)) {
            res.send(`${req.params.name}`)
        } else {
            res.send('404 error, file not found!')
        }
    })

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

let vegetables = ['okra', 'kohlrabi', 'fiddleheads']

app.get('/vegetables/:name', (req, res) => {
        if (vegetables.includes(req.params.name)) {
            res.send(`${req.params.name}`)
        } else {
            res.send('404 error, file not found!')
        }
    }
)

app.get('/vegetables', (req, res) => {
    res.send(vegetables)
})

app.get('*', (req, res) => {
    res.send('404 Not Found')
  })
  
app.listen(PORT, () => console.log(`Serving up delicions fruits on port ${PORT}`))

