
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
    name
    res.send(`${fruits}`)
  })