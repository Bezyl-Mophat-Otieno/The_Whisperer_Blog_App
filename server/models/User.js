const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
username:{
    type:String,
    required:[true," A blog Post must be associated with the author's username"],
    unique:true,
 
},
email:{
    type:String,
    required:true,
    unique:true
},
password : {
    type:String,
    required:true,
},
profilepic:{
    type:String,
    default:""
},
role:{
    type:String,
    default:'author'
}

},
{timestamps:true}
);
module.exports = mongoose.model("User", UserSchema );