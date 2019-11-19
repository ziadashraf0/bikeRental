const Admin = require("../Models/Admin");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.body);
  const admin = await Admin.find();
  console.log(admin);
  res.send(admin);
});
router.post("/signup", async (req, res) => {
  console.log("pos55555ting");
  console.log(req.body);

  //look for an Admin with the same name || SSN;
  //const result = Admin.find({ firstName: req.body.name, SSN: req.body.SSN });
  // if (result) return res.send('Already  Exists');

  let admin = new Admin({
    SSN: parseInt(req.body.SSN),
    email: req.body.email,
    password: req.body.password,
    userName: req.body.name
  });
  try {
    admin = await admin.save();
  } catch (error) {
    console.log(error);
  }

  res.send(admin);
  console.log(admin);
});
module.exports = router;
