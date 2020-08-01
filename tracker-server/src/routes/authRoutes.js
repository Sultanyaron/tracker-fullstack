const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const requireAuth = require('../middlewares/requireAuth');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    res.send({ token, user });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).send({ error: 'Must provide email and password' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({ error: 'Invalid password or email' });
    }
    await user.comparePassword(password);

    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');

    return res.send({ token, user });
  } catch (error) {
    return res.status(404).send({ error: 'Invalid password or email' });
  }
});

router.get('/user', requireAuth, (req, res) => {
  if (req.user) {
    res.send(req.user);
  }
});

module.exports = router;
