const express = require("express");
const app = express();
const cors = require("cors");

// Import routes
const GetContinents = require("./routes/GetContinents");
const GetCountries = require("./routes/GetCountries");
const GetCities = require("./routes/GetCities");
const PostCity = require("./routes/PostCity");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Get continents
GetContinents(app);

// Get countries
GetCountries(app);

// Get cities
GetCities(app);

// Create city
PostCity(app);

// Start server on port 8000
app.listen(8000, () => {
    console.log("Server has started on port 8000")
});