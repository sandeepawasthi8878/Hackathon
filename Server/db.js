require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true); // या false, जैसा आपकी आवश्यकता हो

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Could not connect to the database', error);
    process.exit(1);
  }
};

module.exports = connectDB;
