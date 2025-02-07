const mongoose = require("mongoose");


const connectDB = async () => {
  const mongoUrl = `mongodb+srv://vedantgadewar840:Vedant%4005@cluster0.6vvdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
 try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error in database connection:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;