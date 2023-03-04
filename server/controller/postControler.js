const asyncHandler =require('express-async-handler')
const Post = require ('../models/Post')
const bcrypt = require ('bcrypt')


//CREATE A POST 
//POST /api/post
const createPost = asyncHandler(async (req,res)=>{
  const  {tittle,language,category,desc,username,photo} = req.body
   const newPost = await Post.create({
    tittle,language,category,desc,username,photo
   })

   newPost ? res.status(200).json(newPost) :  res.status(401).json("Post creation failed ");

})


//UPDATE POST
//POST /api/posts/update/:id
const updatePost =asyncHandler (async(req,res)=>{
    const post = await Post.findById(req.params.id)
    if (post){
       if(post.username === req.body.username){
        const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new : true})
        if(updatedPost){
            res.status(200).json("Blog post successfully updated")
        } else {
            res.status(400).json("something went wrong ")
        }

       }else {
        res.status(401).json("You can only update Your blog post")
       }


    }else{
        res.status(404).json("Post Not Found ")
    }


})

// DELETE POST
//DELETE /api/posts/delete/:id
const deletePost = asyncHandler( async (req , res )=>{
    const post = await Post.findById(req.params.id)
    if (post){
       if(post.username === req.body.username){
        const deletedPost = await Post.findByIdAndDelete(req.params.id)
        if(deletedPost){
            res.status(200).json("Blog post successfully deleted")
        } else {
            res.status(400).json("something went wrong ")
        }

       }else {
        res.status(401).json("You can only delete Your blog post")
       }


    }else{
        res.status(404).json("Post Not Found ")
    }


})

//GET POST
// /api/post/:id
const getPost = asyncHandler(async(req,res)=>{
    const post = await Post.findById(req.params.id)
    if(post){
        res.status(200).json(post)
    }
})
//GET ALL POSTS
// /api/post/?username='kalasinga'
// /api/post/?category='music'

//TODO Ensure the approved posts are fetched from the database.
 const getAllPosts = asyncHandler(async(req,res)=>{
  const username = req.query.user
  const catName = req.query.category
  console.log(username)
  let posts;
try {
    if(username){
      posts = await Post.find({username })
      console.log(posts)
    } else if(catName){
      posts = await Post.find({category:catName})
    } else{
       posts = await Post.find()
       console.log(posts)
      }
      res.status(200).json(posts)
    
} catch (error) {
    res.status(500).json(error.message)
    
}

  
 })
 //APPROVE POSTS
//  api/post/approve/:id

const appPosts = asyncHandler(async(req , res )=>{
    const post = await Post.findById(req.params.id)
    if (post){
         const updatedPost = await Post.findByIdAndUpdate(req.params.id,{status:'approved'},{new : true})
         if(updatedPost){
             res.status(200).json("Blog post successfully approved")
         } else {
             res.status(400).json("something went wrong ")
         } 
     }else{
         res.status(404).json("Post Not Found ")
     }

})
// FETCH ALL MY POSTS 
//GET api/posts/:username 
const myPosts = asyncHandler(async(req , res)=>{
const userName = req.params.username
  const fetchedPosts =await Post.find({username:userName})
  fetchedPosts ? res.json(fetchedPosts) : res.json(fetchedPosts)
  
});

//FETCH POST CATEGORIES 
//GET api/posts/categories

const postCategories = asyncHandler(async()=>{
console.log('hello')

})

// VIEW AUTHORS 
//GET api/posts/:authorname 
const authorsPosts = asyncHandler(async(req , res)=>{
const authorName = req.params.authorname
const authorPosts =await Post.find({username:authorName,status:"approved"})
authorPosts ? res.json (authorPosts) : res.json('Something went wrong ')
});
module.exports = {
    getAllPosts , getPost , updatePost , deletePost , createPost ,appPosts ,authorsPosts,postCategories

}