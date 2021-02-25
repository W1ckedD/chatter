const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.requireUserSocket = async (socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    if (!token) {
      next(new Error('You must be logged in'));
    }
    const { id } = jwt.verify(token, 'JWT_SECRET_KEY');
    const user = await User.findById(id);
    if (!user) {
      next(new Error('You must be logged in'));
    }

    socket.user = user;
    next();
  } catch(err) {
    next(new Error('server error'));
  }
}

exports.requireUserHttp = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ error: 'You must be logged in' });
    }
    const token = authorization.replace('Bearer ', '');
    const { id } = jwt.verify(token, 'JWT_SECRET_KEY');
    const user = await User.findById(id);
    if (!user) {
      return res.status(401).json({ error: 'You must be logged in' });
    }
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Server error' });
  }
}
