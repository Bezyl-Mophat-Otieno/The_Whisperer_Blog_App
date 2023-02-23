const asyncHandler =require('express-async-handler')
const User = require ('../models/User')
const Post = require ('../models/Post')
const bcrypt = require ('bcrypt')


//UPDATE A USER
// /api/users/update/:id
const updateUser =asyncHandler (async(req,res)=>{
    const { userId } = req.body
    if (userId === req.params.id){
        if(req.body.password){
            const salt = await  bcrypt.genSalt(10)
            req.body.password = bcrypt.hash(req.body.password , salt)
        }

        const updatedUser = User.findByIdAndUpdate(userId,{
            $set : req.body
        },{new : true})
   if(updatedUser){
    const {password, ...others} = updatedUser._doc
    res.status(200).json(others)
}
    } else {
        res.status(401).json('You can only update your own account ')
    }

})

// DELETE USER | Delete My Account
// /api/users/delete/:id
const deleteUser = asyncHandler( async (req , res )=>{

    const user = await User.findById(req.params.id)
    
    if(user){
    const { userId } = req.body
    if (userId === req.params.id){
        const deletedUser = await User.findByIdAndDelete(req.params.id)
   
    if(deletedUser){
        // Delete userPosts as a user is deleted .
        await Post.deleteMany({username:user.username})
    res.status(200).json('user successfully deleted ')
    console.log(deletedUser)
      }
    } else {
        res.status(401).json('You can only delete your own account ')
    }

    }
})

//GET user
// /api/users/:id
const getUser = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id)
    const {password , ...others} = user._doc
    if(user){
        res.status(200).json(others)
    }
})

//GET ALL USERS 
//GET api/users
const getAllUsers = asyncHandler(async(req,res)=>{
  const users =   await User.find()
  users ? res.json(users) : res.json('No registered student ')
})

module.exports = {
    updateUser,deleteUser,getUser , getAllUsers
}