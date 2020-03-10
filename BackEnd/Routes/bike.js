const Bike = require("../Models/Bike");
const Owner = require("../Models/Owner");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post('/addBike',async (req,res)=>{
    console.log(req.body);
    const result= await Owner.find({SSN:req.body.ownerSSN});
    if(result.length===0)
    {
        console.log('Not Found');
        res.status(404).send('Owner is not Found');

    }

    const bike=new Bike({
        
    ownerSSN:result[0].ownerSSN,
    state:"Not Available" ,
    category: req.body.bikeCategory,
    colour: req.body.bikeColour,
    size: parseInt(req.body.bikeSize),
    condition: req.body.bikeCondition,
    rate: parseFloat(req.body.bikeRate), 
    
    
    });
    
    try{const results =await bike.save();
    console.log(results);
    res.send(results);}
    catch(error){
        console.log('error');
        res.status(400).send('error');
    }



});























module.exports = router;