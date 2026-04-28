'use strict';

const express = require('express');
const session = require('express-session');
const path = require('path');

const authRoutes = require('./routes/auth');
const patientRoutes = require('./routes/patients');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
  secret: 'healthcare-secret',
  resave: false,
  saveUninitialized: false,
}));

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

const requireAuth = (req, res, next) => {
  if (req.session.user) return next();
  res.redirect('/auth/login');
};

app.use('/auth', authRoutes);
app.use('/patients', requireAuth, patientRoutes);

app.get('/', (req, res) => {
  if (req.session.user) return res.redirect('/patients');
  res.redirect('/auth/login');
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});