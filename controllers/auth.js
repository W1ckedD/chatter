const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ username, password: hashedPassword });
    const token = jwt.sign({ id: user._id }, 'JWT_SECRET_KEY');
    return res.status(201).json({
      success: true,
      data: {
        user,
        token,
      }
    });
  } catch(err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'This username is already taken' });
    }
    console.log(err);
    return res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(422).json({ error: 'Invalid credentials' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(422).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, 'JWT_SECRET_KEY');
    return res.status(201).json({
      success: true,
      data: {
        user,
        token,
      }
    });
  } catch(err) {
    console.log(err);
    return res.status(500).json({ error: 'Server error' });
  }
};
