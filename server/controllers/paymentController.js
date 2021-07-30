const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const { catchAsync } = require('../utils/util')

exports.handlePaymentIntents = catchAsync( async(req, res, next) => {
	const { id, amount, currency } = req.body

	const { client_secret } = await stripe.paymentIntents.create({
		payment_method: id,
		currency: 'usd',
		amount: amount * 100,
		confirm: true,
	})


	res.status(201).json({
		status: 'success',
		client_secret
	})
})
