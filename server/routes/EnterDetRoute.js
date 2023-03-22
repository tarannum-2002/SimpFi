const router = require("express").Router()
const Details = require("../models/input");




router.post("/api/EnterDetails", async(req,res)=>{
    const { username, MoneySpent, Description } = req.body;
    const user = await Details.find({ username })
    
    if (!user) {
		return res.json({ status: 'error', error: 'Person is not in the list' })
	}
    try {
		const response = await Details.create({
			username, MoneySpent, Description
		})
		
		console.log('data created successfully: ', response)
	} catch (error) {
		{
            console.log(error)
        }
		throw error
	}

	res.json({ status: 'ok' })

})




module.exports= router; 