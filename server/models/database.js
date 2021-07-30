const { connect } = require('mongoose')

const { NODE_ENV, DB_LOCAL_URL, DB_REMOTE_URL } = process.env;
const DATABASE = NODE_ENV === 'production' ? DB_REMOTE_URL : DB_LOCAL_URL;

module.exports = () => connect(DATABASE, {  	// return function promise as 
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})

