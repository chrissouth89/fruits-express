const express = require('express')
const dotenv = require('dotenv')
dotenv.config() // create the process.env object, and puts all of our .env file key:value pairs into that process.env object
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 4000
const Fruit = require('./models/fruit')

mongoose.connect(process.env.MONGODB_URI) // actual connection

mongoose.connection.on("connected", ()=>{
    console.log(`connected to mongodb ${mongoose.connection.name}`)
}) // log of connection status

app.get('/', async (req, res) => {
    res.render('index.ejs')
})

app.get('/fruits/new', (req, res) => {
    res.render('fruits/new.ejs')
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})