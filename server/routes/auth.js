const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log("📥 Incoming Data:", req.body);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("⚠️ User already exists");
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, email, password: hashedPassword });

    await newUser.save();
    console.log("✅ User saved successfully");
    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error("❌ Registration Error:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
