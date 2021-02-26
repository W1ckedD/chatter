const Message = require('../models/message');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    return res.status(200).json({
      success: true,
      data: {
        messages
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Server error' });
  }
}
