const { Schema, model } = require('mongoose')

const userSchema = new Schema({
	name: {
		type: String,
	},
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	address: {
		street: String,
		city: String,
		zipcode: String,
		geo: [Object]
	},
	phone: {
		type: String,
	},
	website: {
		type: String,
	},

})

module.exports = model('User', userSchema)
