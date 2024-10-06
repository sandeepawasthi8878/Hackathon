
const connectDB = require('./db'); 
const app = require('./app'); 
require("dotenv").config(); 


connectDB().then(() => {
  const PORT = process.env.PORT || 3002;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
