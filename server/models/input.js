const mongoose = require('mongoose')

const InputSchema = new mongoose.Schema(
	{
		username: { type: String, required: true },
		MoneySpent: { type: Number, required: true },
        Description: { type: String, required: true },
        // image: {type: BSON, required: false}
    },
	
)

const model = mongoose.model('InputSchema', InputSchema)

module.exports = model