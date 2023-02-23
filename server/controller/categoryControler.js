
const Comment = require('../models/Comments')
const Category = require('../models/Category')
const asyncHandler = require('express-async-handler')
const {StatusCodes}= require('http-status-codes')
const { model } = require('mongoose')

// addCategory 
// POST api/category/add
 const addCategory = asyncHandler(async(req , res)=>{
 const {category} = req.body;
 if (!category){
    return res.status(StatusCodes.BAD_REQUEST).json('Field cannot be empty');
 }else {
    try {
        const categoryAdded = await Category.create({category})
        if(categoryAdded){
            res.status(StatusCodes.OK).json('success addition of category')
        }
        
    } catch (error) {
        console.log(error)
        
    }
}
 })

 // GET ALL CATEGORIES 
// GET /api/category
const getCategories = asyncHandler(async (req, res) => {
    const allCat = await Category.find();
    allCat ? res.json (allCat) : res.json ('Error Occured')

  })

  module.exports = {
    getCategories,addCategory
}