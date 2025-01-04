//   /models/dbConnection.js
const mongoose = require('mongoose');

// Fetch MongoDB URL from environment variables
const base_url = process.env.MONGODB_URL;

// Function to establish a database connection
const connectDB = async () => {
    try {
        // Attempt to connect to the MongoDB database
        const connection = await mongoose.connect(base_url);
        console.log("Database connected successfully:", connection.connection.host);
    } catch (error) {
        // Catch and log any errors that occur during the connection process
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit the application with failure code if connection fails
    }
};

// Export the connection function
module.exports = connectDB;
