const mongoose = require('mongoose')

const BusinessSchema = new mongoose.Schema(
	{
		businessName: { type: String, required: true, unique: true },
		password: { type: String, required: true }



	},
	
    
)

const model = mongoose.model('BusinessSchema', BusinessSchema)

module.exports = model