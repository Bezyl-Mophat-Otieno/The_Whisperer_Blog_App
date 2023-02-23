const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
tittle:{
    type:String,
    required:true,
    unique:true
},
language :{
    type:String ,
    required:true
    
},
desc:{
    type:String,
    required:true,
},
username: {
    type:String,
    required:true,
    ref:'User'
},
photo:{
    type:String,
    default:""
},
category : {
    type:String,
    required:true,
},
status:{
    type:String,
    default:'pending',
    enum:['pending','approved','disaproved']
}

},
{timestamps:true}
);
module.exports = mongoose.model("Post", PostSchema );