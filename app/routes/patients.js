const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h2>Patients Dashboard</h2><a href="/auth/login">Logout</a>');
});

module.exports = router;