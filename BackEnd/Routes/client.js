const Client = require("../Models/Client");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
router.post("/IDsearch", async (req, res) => {
  console.log(req.body);
  result = await Client.find({
    SSN: parseInt(req.body.clientSSN)
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
    SSN: parseInt(req.body.SSN),
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber
  });
  const result = await client.save();
  res.send(result);
});
module.exports = router;
