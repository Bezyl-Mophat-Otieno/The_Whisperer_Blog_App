const express = require('express')
const router = express.Router()
const { updateUser, deleteUser, getUser, getAllUsers } = require('../controller/userControler')
router.put('/update/:id', updateUser)
router.post('/', getAllUsers)
router.delete('/delete/:id', deleteUser)
router.get('/:id', getUser)


module.exports = router  