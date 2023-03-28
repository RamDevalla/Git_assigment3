const express = require('express')
const router = express.Router();
const Blog = require('../Models/blog')



// To get the Searched Blog Data, Searching with particular Id 
router.get('/:id', (req, res)=>{
    const  id = req.params.id;
    Blog.findOne({id : id}).then(savedBlog=>{
        if(!savedBlog){
            return res.status(400).json({error : "Id or Data Not found"})
        }else{
            res.json({savedBlog})
        }
    }).catch(error=>{
        console.log(error)
    })

})

// retrieves all the Blogs in the DB
router.get('/', (req, res)=>{
    const id = req.params.id;
    Blog.find().then(result=>{
            res.json({result})
       
    }).catch(error=>{
        console.log(error)
    })
})

// To add the Blog With particular Details Given in Schema
router.post('/blog', (req, res)=>{
    const {id, description, topic, posted_at, posted_by} = req.body;
    if (!id || !topic || !description) {
        res.status(422).json({ error: "Kindly fill all the fields" })
    }
    const userBlog = new Blog({
        id, 
        description, 
        topic,  
        posted_by
    })
    userBlog.save().then(data => { res.json({message : "Data Added successfully"}) }).catch(err => { console.log(err) })


})



router.put('/:id', (req, res)=>{
    const id = req.params.id;
    Blog.findOneAndUpdate({id : id}).then(savedBlog=>{
        if(!savedBlog){
            return res.status(400).json({error : "ID Or Data Not Found"})
        }else{
            const {topic, description, posted_at, posted_by} = req.body
             savedBlog = ({
                topic, 
                description, 
                posted_by
            })
            // savedBlog.save().then(data => { res.json({message : "Data updated successfully"}) }).catch(err => { console.log(err) })

        }
    }).catch(error=>{
        console.log(error)
    })
})


module.exports = router;