const express = require('express')
const router = express.Router()
const {addCategory,getCategories} = require ('../controller/categoryControler')

router.get('/', getCategories)
router.post('/add', addCategory)

module.exports = router  