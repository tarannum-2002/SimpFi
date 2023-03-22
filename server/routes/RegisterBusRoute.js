const router = require("express").Router()
const business = require("../models/business");

const bcrypt = require('bcryptjs'); 



router.post('/api/RegisterBusiness', async (req, res) => {
	const { businessName, password: plainTextPassword } = req.body
    console.log(businessName)
	if (!businessName || typeof businessName !== 'string') {
		return res.json({ status: 'error', error: 'Invalid businessname' })
	}

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await business.create({
			businessName,
			password
		})
		console.log('Business created successfully: ', response)
		
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'businessname already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
	
})

module.exports= router