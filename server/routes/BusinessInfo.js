const router = require("express").Router()
const Userdb = require("../models/user");
const Detailsdb = require("../models/input");
const Businessdb = require("../models/business");


router.post("/api/BusinessInfo", async(req,res)=>{
    const {username, businessName} = req.body;

    const user = await Userdb.findOne({username}).lean()
    console.log(user)

    if(user.businessName!==businessName){
        return res.json({status: "error", error: "you are not in the business"})
    }
    try{
        const response = await Detailsdb.find({username})
        console.log(response)
    }
    catch(error) {
        console.log(error)
    }

    res.json({status : 'ok'})
    

})


module.exports= router; 
