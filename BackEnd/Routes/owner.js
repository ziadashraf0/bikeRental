const Owner = require("../Models/Owner");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
router.post("/IDsearch", async (req, res) => {
  console.log(req.body);
  result = await Owner.find({
    SSN: parseInt(req.body.ownerSSN)
  });

  if (result.length === 0) {
    console.log("not found");
    return res.status(400).send("Owner is not found");
  }
  console.log(result);

  return res.status(200).send(result);
});
router.post("/Delete", async (req, res) => {
  console.log(req.body);
  result = await Owner.findOneAndDelete({
    SSN: parseInt(req.body.ownerSSN)
  });

  if (result.length === 0) {
    console.log("not found");
    return res.status(400).send("Owner is not found");
  }
  console.log(result);

  return res.status(200).send(result);
});
router.post("/", async (req, res) => {
  const owner = new Owner({
    SSN: req.body.SSN,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  const result = await owner.save();
  res.send(result);
});
router.post("/login", async (req, res) => {
  if (!req.body) {
    res.status(400).send("Request body is empty");
    return;
  }

  console.log(req.body);
  result = await Owner.find({ email: req.body.email });

  //if not found
  if (result.length === 0) {
    console.log("not found");
    return res.status(404).send("Owner is not found");
  }
  const hash = result[0].password;
  const results = await bcrypt.compare(req.body.password, hash);
  if (results === true) {
    console.log("AUTHORIZED");
    return res.status(200).send("AUTHORIZED");
  } else {
    console.log("Not found");
    return res.status(404).send("Wrong Password");
  }
});

router.post("/signup", async (req, res) => {
  console.log(req.body);
  //look for an Owner with the same name || SSN;
  const result = await Owner.find({
    $or: [{ SSN: req.body.SSN }, { email: req.body.email }]
  });

  if (result.length > 0) {
    console.log("already exists");
    return res.status(400).send("Already  Exists");
  }
  let owner = new Owner({
    SSN: req.body.SSN,
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    birthDate: req.body.birthDate
  });
  try {
    owner = await owner.save();
  } catch (error) {
    console.log(error);
  }

  res.status(200).send(owner);
  console.log(owner);
});

router.get("/viewProfile", async (req, res) => {
  console.log(req.body);
  if (!req.body.SSN) {
    res.status(400).send("Bad Request");
    return;
  }
  const owner = await Owner.find({ SSN: req.body.SSN }).select({ password: 0 });
  if (owner.length < 1) {
    res.status(404).send("Owner was not found");
    return;
  }
  res.status(200).send(owner[0]);
});
module.exports = router;
