const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    id:{
        type : Number
    },
    name :{
        type : String,
        required : true
    },  
    currentClass :{
        type : String,
        required : true
    },
    division :{
        type : String,
        required : true,
        
    }
})


module.exports = mongoose.model("Post", postSchema)     