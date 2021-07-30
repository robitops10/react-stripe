const User = require('../models/userModel')
const { catchAsync } = require('./uitl')

// POST 	/api/v1/users
exports.getUsers = catchAsync( async (req, res, next) => {
	const users = await User.find()

	res.status(200).json({ 
		status: 'success',
		users
	})
})

exports.getUserById = catchAsync(async (req, res, next) => {
	const user = await User.findById(req.params.id)

	res.status(200).json({ 
		status: 'success',
		user
	})
})


exports.login = catchAsync(async (req, res, next) => {
	console.log( req.body )

	const { email, password } = req.body 
	const user = await User.findOne({ email })

	res.status(201).json({ 
		status: 'success',
		user
	})
})


exports.addUser = catchAsync(async (req, res, next) => {
	const user = req.body 
	// const user = await User.create( req.body )

	res.status(201).json({ 
		status: 'success',
		user
	})
})



