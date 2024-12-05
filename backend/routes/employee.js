const express = require('express');
const { addEmployee, getEmployees } = require('../controllers/employee');

const router = express.Router();

// Define the routes
router.post('/add', addEmployee); // Add employee
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error('Error fetching employees:', err);
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
  });

module.exports = router;
