require('dotenv').config()  							// load environment variable
const database = require('./models/database')

const express = require('express')
const cors = require('cors')

const userRouter = require('./routes/userRoute')
const paymentRouter = require('./routes/paymentRoute')


const server = express()

// handle common middleware here
server.use( cors() )  					// for stripe + localhost:3000
server.use(express.json())  		// allow JSON data as request

// handle route middleware here
server.use('/api/v1/users', userRouter)
server.use('/api/v1/payment', paymentRouter)


// handle NextJS middleware here 
server.get('*', (req, res, next) => {
	res.status(200).json({
		status: 'default route',
	})
})

// handle error here
server.use( (err, req, res, next) => {
	res.status(500).json({
		status: 'failed',
		message: err.message,
		err
	})
})


// start server on port 3000 on locally
const { PORT = 5000 } = process.env
server.listen( PORT, async (err) => {
	if( err ) throw err

	const { connection } = await database()
	console.log(`Server running on ${connection.host} port: ${PORT} database successful!!!`)

})
