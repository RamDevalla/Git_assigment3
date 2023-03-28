const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
const mongoose = require('mongoose')
const {MONGOURI} = require('./key')
const router = require('./Routes/route')
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
mongoose.connect(MONGOURI)
mongoose.connection.on("connected", ()=>{
    console.log("MONGODB connected Successfully")
})
mongoose.connection.on("error", (error)=>{
    console.log(error)
})

app.use("/api/student", router) 


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   