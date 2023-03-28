const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    id : String,
    description : String,
    topic : String,
    posted_at :{
        type : Date,
        required : true,
        default : Date.now
    },
    posted_by : String,
})

module.exports= mongoose.model("Blog", blogSchema);
