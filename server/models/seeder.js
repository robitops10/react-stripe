require('dotenv').config()  							// load environment variable
const database = require('./database')()
	.then(conn => console.log(`Database on '${conn.connection.host}' successfull !!!`))
	.catch(console.error)

const User = require('./userModel')


const { readFile } = require('fs/promises')
const { resolve } = require('path')

const file = resolve( __dirname, '../..', 'data', 'users.json')
let users = readFile(file, 'utf-8')

const option = process.argv[2]


// error handler for bellow 3 methods
const catchAsync = (fn) => (data) => fn(data).catch(err => {
	console.error( err )
	process.exit(0)  						
})



const importData = catchAsync( async ( data ) => {
	let users = await data
			users = JSON.parse( users )

	await User.create(users)
	console.log('New data added !!!')
	process.exit(0)  						
})

const deleteData = catchAsync( async () => {
	await User.deleteMany()
	console.log('Data Deleted !!!')
	process.exit(0)  						
})

const showData = catchAsync( async () => {
	const users =	await User.find()
	console.log( users )
	process.exit(0)  						
})


if( option === '--import' ) return importData( users )
if( option === '--delete' ) return deleteData( )
showData()
