const Client = require("../Models/Client");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt=require('bcryptjs');
const Bank = require("../Models/Bank");
const date = require('date-and-time');

router.post("/IDsearch", async (req, res) => {
  console.log(req.body);
  result = await Client.find({
    SSN: req.body.clientSSN
  });

  if (result.length === 0) {
    console.log("not found");
    return res.status(400).send("Client is not found");
  }
  console.log(result);

  return res.status(200).send(result);
});


router.post("/", async (req, res) => {
  console.log(req.body);
  const client = new Client({
    SSN: req.body.SSN,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber
  });
  const result = await client.save();
  res.send(result);
});
router.post("/add", async (req, res) => {
  console.log(req.body);
  const client = new Client({
    userName:req.body.userName,
    SSN: req.body.SSN,
    email: req.body.email,
    firstName: req.body.firstName,
    password:req.body.password,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    birthDate:req.body.birthDate
   
  });
  const result = await client.save();
  res.send(result);
});

router.post("/emailCheck", async (req, res) => {
  const result = await Client.find({
    $or: [{ SSN: req.body.SSN }, { email: req.body.email }]
  });
  if (result.length > 0) {
    console.log("already exists");
    return res.status(400).send("Already  Exists");
  }
  res.status(200).send("valid");
});
router.post("/signup", async (req, res) => {
  const result = await Client.find({
    $or: [
      { SSN: req.body.SSN },
      { email: req.body.email },
      { userName: req.body.userName }
    ]
  });
  if (result.length > 0) {
    console.log("already exists");
    return res.status(400).send("Already  Exists");
  }
  let client = new Client({
    SSN: req.body.SSN,
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    birthDate: req.body.birthDate,
    userName: req.body.userName,
    ride:[],
    dependent:[],
    activated:false
  });
  try {
    client = await client.save();
    return res.status(200).send(client);
  } catch (error) {
    console.log("ERROR");
    return res.status(400).send(error);
  }
  console.log(req.body);

  
});
router.post("/login", async (req, res) => {
  console.log(req.body);
  result = await Client.find({
    userName: req.body.userName
  });

  if (result.length === 0) {
    console.log("not found");
    return res.status(404).send("client is not found");
  }
  const hash = result[0].password;
  const results = await bcrypt.compare(req.body.password, hash);
  if (results === true) {
    console.log("AUTHORIZED");
    return res.status(200).send("AUTHORIZED");
  } else {
    console.log("Not found");
    return res.status(404).send("not found");
  }
});


router.post('/viewProfile',async (req,res)=>{
  if(!req.body.SSN)
    {
     return res.status(400).send("Bad Request")
      
    }
  const client = await Client.find({SSN:req.body.SSN}).select({password:0});
  if(client.length<1)
    {
     return res.status(404).send("client was not found");
      
    }
 return res.status(200).send(client[0]);   
});

router.put('/editEmail',async (req,res)=>{
const client= await Client.findOne({SSN:req.body.SSN});
if(!req.body.SSN || !req.body.email)
    return res.status(400).send('Bad Request');
const temp =await Client.findOne({email:req.body.email});
if(temp){
  return res.status(400).send('Bad Request email already in use');

}
    
if(!client)
  {
    return res.status(404).send('Client was not found');
    
  }

  await Client.updateOne({ _id: client._id }, { $set: { email: req.body.email } });

  const newClient = await Client.findOne({ SSN: req.body.SSN });
  console.log(newClient);
  return res.status(200).send(newClient);

});
router.put('/editPhoneNumber',async (req,res)=>{
  if(!req.body.SSN || !req.body.phoneNumber){
    return res.status(400).send('Bad Request');
  }
  const client =await Client.findOne({SSN:req.body.SSN});
  if(!client)
  {
    return res.status(404).send('Client was not found');

  }
  await Client.updateOne({_id:client._id},{$set:{phoneNumber:req.body.phoneNumber}});
  const newClient = await Client.findOne({ SSN: req.body.SSN });
  console.log(newClient);
  return res.status(200).send(newClient); 

  });
  
router.put('/editPassword',async (req,res)=>{

  if(!req.body.SSN || !req.body.newPassword|| !req.body.password){
    return res.status(400).send('Bad Request');
  }

const client =await Client.findOne({SSN:req.body.SSN});
if(!client)
{
  return res.status(404).send('Client was not found');

}
    const hash=client.password;
    const results= await bcrypt.compare(req.body.password,hash);

    if(!results)
    {
        console.log('wrong Password');
        return res.status(404).send('Wrong Password');
    }
    //check if oldPassword=== newPassword
    const check= await bcrypt.compare(req.body.newPassword,hash);
    if(check === true){
        console.log('newPassword and oldPassword do match');
        return res.status(400).send('newPassword and oldPassword do match');
    }

    if(req.body.newPassword){
        //hashing the new password
        bcrypt.hash(req.body.newPassword, 10).then(async (hash)=>{
            //updating the password
            await Client.updateOne({ _id: client._id }, { $set: { password: hash } });
        });
             
    }

    const newClient = await Client.findOne({ SSN: req.body.SSN });
    console.log(newClient);
    return res.status(200).send(newClient);


});

router.put('/editBirthDate',async (req,res)=>{
  if(!req.body.SSN || !req.body.birthDate){
    return res.status(400).send('Bad Request');
  }
  const client =await Client.findOne({SSN:req.body.SSN});
  if(!client)
  {
    return res.status(404).send('Client was not found');

  }
  await Client.updateOne({_id:client._id},{$set:{birthDate:req.body.birthDate}});
  const newClient = await Client.findOne({ SSN: req.body.SSN });
  console.log(newClient);
  return res.status(200).send(newClient); 

  });
  router.put('/editUserName',async (req,res)=>{
    if(!req.body.SSN || !req.body.userName)
    return res.status(400).send('Bad Request');

 
    const client= await Client.findOne({SSN:req.body.SSN});

    if(!client)
      {
        return res.status(404).send('Client was not found');
        
      }
  const temp =await Client.findOne({userName:req.body.userName});

    if(temp){
      return res.status(400).send('Bad Request userName already in use');
    
    }
    
    
      await Client.updateOne({ _id: client._id }, { $set: { userName: req.body.userName } });
    
      const newClient = await Client.findOne({ SSN: req.body.SSN });
      console.log(newClient);
      return res.status(200).send(newClient);
    
    });

//Activate client's account
router.put('/activateAccount',async (req,res)=>{
      
  const now = new Date();
  
  if(!req.body.cardValidityDate|| !req.body.cardVerificationCode|| !req.body.cardNumber) return res.status(400).send('Bad Request');
  
  const currentDate=date.format(now,"YYYY/MM");
  const clientCardvalidityDate= date.format(new Date(req.body.cardValidityDate),"YYYY/MM");

  if(currentDate> clientCardvalidityDate)  return res.status(400).send("Your Card is Expired");

  const clientBankAccount =await Bank.findOne({cardVerificationCode:req.body.cardVerificationCode,cardNumber:req.body.cardNumber});
  if(!clientBankAccount) return res.status(404).send("Card is UNauthorized");
  const realValidityDate = date.format(new Date(clientBankAccount.cardValidityDate),"YYYY/MM");
  console.log("realValidityDate "+realValidityDate);
  if(realValidityDate!== clientCardvalidityDate) return res.status(404).send("Card is unauthorized because of the date");
  const bankAccountNumber= clientBankAccount.bankAccountNumber;
 
 //updating clients personnel details
  try{
            const client =await Client.findOne({SSN:req.body.SSN});
          await Client.updateOne({_id:client._id},{$set:{bankAccountNumber:bankAccountNumber,activated:true}});
          const result=await Client.findOne({_id:client._id});
          return res.status(200).send(result);
  }catch(error){
    console.log("error");
    return res.status(400).send("Failed to Activate Account");
  }

});
    
module.exports = router;
