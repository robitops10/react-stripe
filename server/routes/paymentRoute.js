const { Router } = require('express')
const { handlePaymentIntents } = require('../controllers/paymentController')

module.exports = router = Router()

router.route('/').post( handlePaymentIntents )
