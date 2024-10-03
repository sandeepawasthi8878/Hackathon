// server/index.js
const connectDB = require('./db'); // Import db.js
const app = require('./app'); // Import app.js
require("dotenv").config(); 

// Connect to MongoDB and start the server
connectDB().then(() => {
  const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
