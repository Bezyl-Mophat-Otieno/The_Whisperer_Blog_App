const asyncHandler =require('express-async-handler')
const User = require ('../models/User')
const bcrypt = require ('bcrypt')



const register = (async(req,res)=>{
    
   const { username , email , password } = req.body
 //Generate salt that will be used in encrypting the password(hashing the password)
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password,salt);
    const newUser = await User.create ({
        username :username,
        email:email,
        password:hashedPassword
    })
    if(!newUser){
        res.status(500).json('something went wrong')
    }else{
        res.status(200).json('You have successfully registered')
    }
    return

})

const login = asyncHandler( async (req , res )=>{
    const { username , password  } = req.body
    const user = await User.findOne({username:username})
    if(user){
        const validateUser = await bcrypt.compare(password , user.password)
        if(validateUser){
           const {password,...others} = user._doc
           res.status(200).json(others)
        return
       }else{
        res.status(400).json("wrong Credentials")
        return
       }
       
    } else {
      res.status(400).json("Wrong Credentials")
      return
    }

})

module.exports = {
    register,login
}