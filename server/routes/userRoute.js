const { Router } = require('express')
const { 
	login,
	getUsers, 
	addUser,
	getUserById,

} = require('../controllers/userController')

module.exports = router = Router()



router.route('/login').post(login)
router.route('/:id').post(getUserById)

router.route('/')
	.get(getUsers)
	.post(addUser)

