const Bike = require("../Models/Bike");
const Owner = require("../Models/Owner");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.post('/addBike',async (req,res)=>{

    const result= await Owner.find({SSN:parseInt(req.body.SSN)});
    if(result.length===0)
    {
        console.log('Not Found');
        res.status(404).send('Owner is not Found');

    }

    const bike=new Bike({
        
    ownerSSN:result[0].SSN,
    state:req.body.state ,
    category: req.body.category,
    colour: req.body.colour,
    size: parseInt(req.body.size),
    condition: req.body.condition,
    rate: parseFloat(req.body.rate), 
    
    
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