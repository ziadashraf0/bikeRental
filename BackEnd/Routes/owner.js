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

module.exports = router;
