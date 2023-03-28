const express = require('express')
const mongoose = require('mongoose')
const app = express();
const port = 4000;

const {MONGOURI} = require('./key')

const router = require('./Routes/route')
app.use(express.json());


require('./Models/blog')
app.use(router)


mongoose.connect(MONGOURI)
mongoose.connection.on("connected", () => {
    console.log("connected to mongoose db") // IF connected gives result in console
})

mongoose.connection.on("error", (err) => {
    console.log(`Error occured : ${err}`)   // IF error Displays the error in console
})




app.listen(port, ()=>{
    console.log(`Server Succesfully running on ${port}`)
})