const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Create new course
router.post('/', async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: 'Course title already exists' });
    } else {
      res.status(400).json({ error: err.message });
    }
  }
});

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
