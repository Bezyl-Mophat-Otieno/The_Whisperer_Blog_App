const express = require('express')
const router = express.Router()
const { getAllCommentS, writeComment, deleteComment,getEveryThing } = require('../controller/commentsControler')

router.get('/:id', getAllCommentS)
router.get('/',getEveryThing)
router.post('/write', writeComment)
router.delete('/delete/:id', deleteComment)

module.exports = router  