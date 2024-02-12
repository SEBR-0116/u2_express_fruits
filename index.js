const express = require(`express`)
const PORT = process.env.PORT || 3001
const app = express()
app.listen(PORT,()=>{
    console.log(`Serving up delicious fruits on port ${PORT} 🍒`)
})


app.get('/hello',(req,res)=>
{
    console.log(`Hello World!`)
    res.send(`Hello World!!`)
})

app.get('/greet/:name',(req,res)=>
{
    res.send(`Why hello there,${req.params.name}!!`)
})

app.get('/five',(req,res)=>
{
    let numbers = [1,2,3,4,5]
    res.send(numbers)
})
app.get(`/fruits/sort`,(req,res)=>{
    console.log(`You are in`)
    let fruitsarray1 = [`Mango`,`Banana`,`Apple`]
    fruitsarray1.sort()
    res.send(fruitsarray1)
})

app.get(`/fruits`,(req,res)=>{
    let fruitsarray = [`Mango`,`Banana`,`Apple`]
   
    res.send(fruitsarray)
})

app.get(`/fruits/:name`,(req,res)=>{
    let fruitsarray = [`Mango`,`Banana`,`Apple`]
    let toreturn = null
     fruitsarray.forEach((fruit)=>{
        if (fruit === req.params.name)
        {
            toreturn=fruit
        }
    })
    res.send(toreturn)
})



app.get(`/veggies`,(req,res)=>{
    let Veggiessarray = ["carrot", "broccoli", "spinach", "bell pepper", "cucumber"]
    res.send(Veggiessarray)

})

app.get(`/veggies/:name`,(req,res)=>{
    let Veggiessarray = ["carrot", "broccoli", "spinach", "bell pepper", "cucumber"]
    let toreturn = null
    Veggiessarray.forEach((vegetable)=>{
        if (vegetable === req.params.name)
        {
            toreturn=vegetable
        }
    })
    res.send(toreturn)
})

app.get(`*`,(req,res)=>{
    res.send(`404 Not found`)
})