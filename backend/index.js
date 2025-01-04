const express = require('express');
require('dotenv').config();
const app = express();
require('./models/dbConnection')();
const Employee = require('./models/employeeSchema');
const Kudo = require('./models/kudoSchema');
const users = require('./models/user')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const Port = process.env.PORT ||  3000;
app.use(cors());
// Middleware
app.use(express.json());


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        // Find user by email
        const user = await users.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

      

      

        // Respond with token
        res.json({
            message: 'Login successful!',
            
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// API to give kudos
app.post('/kudos', async (req, res) => {
    const {giver, receiver, message } = req.body;
    try {
        const kudo = new Kudo({ giver, receiver, message });
        await kudo.save();

        // Update employee stats (totalGiven and totalReceived)
        await Employee.updateOne({ _id: giver }, { $inc: { totalGiven: 1 } });
        await Employee.updateOne({ _id: receiver }, { $inc: { totalReceived: 1 } });
        // await Employee.updateOne({ _id: username }, { $inc: { totalReceived: 1 } });


        res.status(200).send('Kudos given successfully');
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).send('Server error');
    }
});

// API to get engagement stats (total given and total received per employee)
app.get('/engagement-stats', async (req, res) => {
    try {
        const stats = await Employee.find({}, { name: 1, totalGiven: 1, totalReceived: 1 });
        res.status(200).json(stats);
    } catch (error) {
        res.status(500).send('Server error');
    }
});


// API to get leaderboard (top 10 employees with the most received kudos)
app.get('/leaderboard', async (req, res) => {
    try {
        const leaderboard = await Employee.find()
            .sort({ totalReceived: -1 })
            .limit(10)
            .select('name totalReceived');
        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.listen(Port, () => {
    console.log(`Server is running at http://localhost:${Port}`);
});
