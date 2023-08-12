const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = 8000 || process.env.PORT;
const hbs = require('hbs');
const { json } = require('express');

require('./db/conn.js');
const Register = require('./models/registers.js');
const PrivacyNew = require('./models/privacys.js');

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialPath);

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/contact', (req, res) => {
  res.render('contact.hbs');
});

app.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy.hbs');
});

app.post('/privacy-policy', async (req, res) => {
  try {
    const registerPrivacy = new PrivacyNew({
      name: req.body.name,
      email: req.body.email,
      option: req.body.option,
    });
    console.log(registerPrivacy);
    const registeredprivacy = await registerPrivacy.save();
    res.status(201).render('index');
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/terms-conditions', (req, res) => {
  res.render('terms-conditions.hbs');
});

app.get('/sign-up', (req, res) => {
  res.render('sign-up.hbs');
});

app.post('/sign-up', async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    if (password === cpassword) {
      const registerCustomer = new Register({
        email: req.body.email,
        user: req.body.user,
        password: password,
        cpassword: cpassword,
      });

      const registered = await registerCustomer.save();
      res.status(201).render('log-in.hbs');
      // res.status(201);
    } else {
      res.send('invalid password go back to correct password <-');
    }
  } catch (error) {
    res.status(400).render('error.hbs');
  }
});

app.get('/log-in', (req, res) => {
  res.render('log-in.hbs');
});

app.post('/log-in', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await Register.findOne({ email: email });
    if (password === useremail.password) {
      res.status(201).render('index.hbs');
    } else {
      res.status(400).render('log-in.hbs');
    }
  } catch (error) {
    res.status(500).render('anonymous.hbs');
  }
});

app.get('/article-details', (req, res) => {
  res.render('article-details.hbs');
});

app.get('/anonymous', (req, res) => {
  res.render('anonymous.hbs');
});

app.get('/*', (req, res) => {
  res.render('error.hbs');
});

app.listen(PORT, () => {
  console.log(`PORT running on http://localhost:${PORT}`);
});
