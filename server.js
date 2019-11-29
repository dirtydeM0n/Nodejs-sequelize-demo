const express = require("express");
const db = require("./src/database/dbcon");
const app = express();

app.use(express.json({ extended: false })); // allows us to get data in req.body for console
const PORT = process.env.PORT || 5000;

// Get request
app.get("/", (req, res) => res.send("Express server online. API running"));

app.listen(PORT, () => console.log("Server Online"));
