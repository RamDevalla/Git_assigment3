const Post = require('../Models/post')

// COde to get data from given id

async function getdata(req, res, next){
let post 
const id = req.params.id 
try{
    post = await Post.findOne({id : id})
    if(!post){
      return  res.status(404).json({message : "Unable to find Data"})
    }
}catch(error){
    return res.status(500).json({message : error.message})
}
    res.post = post
    next()

}

module.exports = getdata;






// COde to get data by _id of the data

// const Post = require('../Models/post')

// async function getid(req, res, next){
// let post 

// try{
//     post = await Post.findById(req.params.id)
//     if(!post){
//       return  res.status(404).json({message : "Unable to find Data"})
//     }
// }catch(error){
//     return res.status(500).json({message : error.message})
// }
//     res.post = post
//     next()

// }

// module.exports = getid;