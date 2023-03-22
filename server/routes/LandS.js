const router = require("express").Router()
const User = require("../models/user");



const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// routes will be here....
// router.get("/register", async(req, res) => {
    
//     res.render("register")
// })

// router.get("/login", async(req, res) => {
    
//     res.render("login");
// })

router.post('/api/Login', async (req, res) => {
	const { username, password } = req.body
	const user = await User.findOne({ username }).lean()
	const USER=user

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET=process.env.JWT_SECRET, {expiresIn: "24h"}
		)
		console.log(username)
		// console.log(token)
		
		return res.json({ user:username, status: 'ok', data: token })
	
	}
    
	res.json({ status: 'error', error: 'Invalid username/password' })
})

router.post('/api/Signup', async (req, res) => {
	const { username, businessName, password: plainTextPassword } = req.body
	// console.log(username)
	// console.log(businessName)
	// console.log(plainTextPassword)
	// const query={ businessName: businessName}
	// const projection={ _id: 0, title: 1 }
    // const business = await Business.findOne(query, projection)
	// console.log(business)

	if (!username || typeof username !== 'string') {
		return res.json({ status: 'error', error: 'Invalid username' })
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
	// if (!business){
	// 	return res.json({ status: 'error', error:'Invalid business name'})
	// }
	// console.log('ok')

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await User.create({
			username,
			businessName,
			password
		})
		console.log('User created successfully: ', response)
		
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'Username already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
	
})



module.exports = router;
