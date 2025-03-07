// dependency imports
const express = require('express')
const dotenv = require('dotenv')
dotenv.config() // create the process.env object, and puts all of our .env file key:value pairs into that process.env object
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 4000
const Fruit = require('./models/fruit')

// DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI) // actual connection

mongoose.connection.on("connected", ()=>{
    console.log(`connected to mongodb ${mongoose.connection.name}`)
}) // log of connection status

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }))

// ROUTES
// I.N.D.U.C.E.S

// ROOT/HOME
app.get('/', async (req, res) => {
    res.render('home.ejs')
})


// INDEX
app.get('/fruits', async (req, res) => {
    const allFruits = await Fruit.find()
    console.log(allFruits)
    res.render('fruits/index.ejs', {
        allFruits: allFruits
    })
})

// NEW
app.get('/fruits/new', (req, res) => {
    res.render('fruits/new.ejs')
})

// DELETE

// UPDATE

// CREATE
app.post('/fruits', async (req, res) => {
    if(req.body.isReadyToEat === 'on') {
        req.body.isReadyToEat = true;
    } else {
        req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body)
    console.log(req.body)
    res.redirect('/fruits')
})

// EDIT


// SHOW
app.get('/fruits/:fruitId', async (req, res) => {
    const foundFruit = await Fruit.findById(req.params.fruitId)
    res.render('fruits/show.ejs', {
        foundFruit: foundFruit
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})