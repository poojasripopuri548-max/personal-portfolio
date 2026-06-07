require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Project = require('./models/Project');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB Connected');
    console.log('Database:', mongoose.connection.name);
})
.catch(err => console.log(err));

// Get All Projects
app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();

        console.log("Projects found:", projects);

        res.json(projects);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Start Server
app.listen(5000, () => {
    console.log('Server Running on Port 5000');
});