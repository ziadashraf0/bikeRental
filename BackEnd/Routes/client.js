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
router.post("/signup", async (req, res) => {
  const result = await Client.find({
    $or: [{ SSN: req.body.SSN }, { email: req.body.email }]
  });
  if (result.length > 0) {
    console.log("already exists");
    return res.status(400).send("Already  Exists");
  }
  let client = new Client({
    SSN: parseInt(req.body.SSN),
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    birthDate: req.body.birthDate
  });
  try {
    client = await client.save();
  } catch (error) {
    console.log(error);
  }
  console.log(req.body);

  res.status(200).send(result);
});
router.post("/login", async (req, res) => {
  console.log(req.body);
  result = await Client.find({
    email: req.body.email,
    password: req.body.password
  });
  if (result.length === 0) {
    console.log("not found");
    return res.status(404).send("client is not found");
  }
  console.log("AUTHORIZED");
  return res.status(200).send("AUTHORIZED");
});
router.get("/viewProfile", async (req, res) => {
  if (!req.body.SSN) {
    res.status(400).send("Bad Request");
    return;
  }
  const client = await Client.find({ SSN: req.body.SSN }).select({
    password: 0
  });
  if (client.length < 1) {
    res.status(404).send("client was not found");
    return;
  }
  res.status(200).send(client[0]);
});

module.exports = router;
