const express = require('express')
const router = express.Router();
const Post = require('../Models/post')
const getdata = require('../Middleware/getdata');

// Getting all data     ======================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.get('/', async (req, res)=>{
    try{
        const AllPosts = await Post.find();
        res.status(200).json(AllPosts)
    }catch(error){
        res.status(500).json({message : error.message});
    }
})

// Get a specified Id data ======================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.get('/:id',getdata, async(req, res)=>{
    res.json(res.post)
   })

//Create a new Post  with new  id   ======================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.post('/', async(req, res)=>{
    const AllPosts = await Post.find();
        const N = AllPosts.length - 1
        const prev_id = AllPosts[N].id
        const id = prev_id + 1;
        const {name, currentClass, division} = req.body
    const post = new Post({
        id : id,
        name, 
        currentClass, 
        division
    })
    try{
        const newPost = await post.save()
        res.status(201).json({message : `New ID is ${id}`})
    }catch(error){
        res.status(500).json({message : error.message});
    }
})

// Update an existing post with id ======================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.put('/:id',getdata, async(req, res)=>{
    const {name, currentClass, division} = req.body
    if(name != null || currentClass != null || division != null){
        res.post.name = name,
        res.post.currentClass = currentClass,
        res.post.division = division
    }
    try {
        const updatedPost = await res.post.save()
        res.json(updatedPost)

    } catch (error) {
            return res.status(400).json({message : error.message})
    }

})

// Deleting an existing post with id ======================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.delete('/:id',getdata, async (req, res)=>{
    try {
        const id = res.post._id
        await Post.findOneAndDelete(id);
        res.json({message : " Given Id's Student Data Deleted"})

    } catch (error) {
        return    res.status(500).json({message : error.message})
    }

})

module.exports = router;
