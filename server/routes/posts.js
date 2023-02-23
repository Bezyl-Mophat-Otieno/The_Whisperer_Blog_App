const express = require('express')
const router = express.Router()
const { getAllPosts , 
    getPost , 
    updatePost ,
    deletePost , 
     createPost ,
     appPosts ,
     postCategories
    } = require ('../controller/postControler')
router.put('/update/:id',updatePost)
router.put('/approve/:id',appPosts)
router.post('/create',createPost)
router.delete('/delete/:id',deletePost)
router.get('/:id',getPost)
router.get('/categories',postCategories)
router.get('/',getAllPosts)


module.exports = router  