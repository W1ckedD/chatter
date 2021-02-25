const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const MONGODB_CONN_STR = 'mongodb://localhost:27017/chatter'
    const conn = await mongoose.connect(MONGODB_CONN_STR, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`connected to MongoDB: ${conn.connection.host}`);
  } catch(err) {
    console.log(err);
    process.exit(1);
  }
}
