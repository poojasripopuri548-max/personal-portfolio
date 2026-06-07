require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Project = require('./models/project');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB Connected');
})
.catch((err) => {
    console.log('MongoDB Error:', err);
});

// Home Route
app.get('/', (req, res) => {
    res.send('Portfolio API Running');
});

// Get All Projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Render Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});