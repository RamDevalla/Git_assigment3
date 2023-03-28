const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
// Regular Expression to check alphabets and Any special Characters
let regex = /^[a-zA-Z]+(([\'\,\.\-_ \/)(:][a-zA-Z_ ])?[a-zA-Z_ .]*)*$/

// Post Api for addition of given two numbers;
app.post("/add", (req, resp)=>{
    let n1 = req.query.num1;
    let n2 = req.query.num2;

    if(regex.test(n1) == true || regex.test(n2) == true ){
        resp.status(401).json({Status : "Failure", Message : "Enter Valid Input"})
    }else{
        n1 = JSON.parse(n1) ;
        n2 = JSON.parse(n2);
        let result = n1 + n2;
        let Message  =  'The product of given numbers' ; 
        if(n1 < 10**6 || n2 < 10**6  && result < 10**6 ){
            Message =  "UnderFlow";
        }
        if(n1 > 10**6 || n2 > 10**6  && result > 10**6 ){
            Message = "OverFlow";
        }
        resp.status(200).json({
             status: "Success",
             message: Message, 
             sum: result
        })
    }
})
app.post("/sub", (req, resp)=>{
    let n1 = req.query.num1;
    let n2 = req.query.num2;

    if(regex.test(n1) == true || regex.test(n2) == true ){
        resp.status(401).json({status : "Failure", Message : "Enter Valid Input"})
    }else{
        n1 = JSON.parse(n1) ;
        n2 = JSON.parse(n2);
        let result = n1 - n2;
        let Message  =  'The product of given numbers' ; 
        if(n1 < 10**6 || n2 < 10**6  && result < 10**6 ){
            Message =  "UnderFlow";
        }
        if(n1 > 10**6 || n2 > 10**6  && result > 10**6 ){
            Message = "OverFlow";
        }
        resp.status(200).json({
             status: "Success",
             message: Message, 
             sum: result
        })
    }

})
app.post("/divide", (req, resp)=>{
    let n1 = req.query.num1;
    let n2 = req.query.num2;

    if(regex.test(n1) == true || regex.test(n2) == true ){
        resp.status(401).json({status :"Failure",  Message : "Enter Valid Input"})
    }
    else{
        n1 = JSON.parse(n1) ;
        n2 = JSON.parse(n2);
        let Message  =  'The product of given numbers' ; 
        if(n1 < 10**6 || n2 < 10**6  && result < 10**6 ){
            Message =  "UnderFlow";
        }
        if(n1 > 10**6 || n2 > 10**6  && result > 10**6 ){
            Message = "OverFlow";
        }
        if(n2 == 0 ){
            resp.status(400).json({
                Status : "Error",
                Message : "Cannot divide by zero"})
        }
        let result = n1  / n2;
        resp.status(200).json({
             status: "Success",
             message: Message, 
             Result : result
        })
    }
})
app.post("/multiply", (req, resp)=>{
    let n1 = req.query.num1;
    let n2 = req.query.num2;

    if(regex.test(n1) == true || regex.test(n2) == true ){
        resp.status(401).json({Status : "Failure" , Message : "Invalid data types"})
    }
    else{
        n1 = JSON.parse(n1) ;
        n2 = JSON.parse(n2);
        let result = n1  * n2;
        let Message  =  'The product of given numbers' ; 
        if(n1 < 10**6 || n2 < 10**6  && result < 10**6 ){
            Message =  "UnderFlow";
        }
        if(n1 > 10**6 || n2 > 10**6  && result > 10**6 ){
            Message = "OverFlow";
        }
        resp.status(200).json({
             status: "Success",
             message: Message, 
             Product : result
        })
    }

})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;