const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.send('<h2>Login Page</h2><form method="POST"><input name="user"/><button>Login</button></form>');
});

router.post('/login', (req, res) => {
  req.session.user = req.body.user;
  res.redirect('/patients');
});

module.exports = router;