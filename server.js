const fs = require('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const FILE_PATH = 'users.json';

// Loading users 
let users = [];
if (fs.existsSync(FILE_PATH)) {
    users = JSON.parse(fs.readFileSync(FILE_PATH, 'utf-8'));
}

// Saving users 
const saveUsers = () => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
};

app.post('/signin', (req, res) => {
    console.log("Received sign-in request:", req.body);
    const { email, password, name, vehicleNumber, balance } = req.body;

    // Checking if user already Exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists. Please log in." });
    }

    // Saving the new users
    const newUser = { email, password, name, vehicleNumber, balance };
    users.push(newUser);
    res.status(201).json({ message: "User registered successfully!", user: newUser });
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find user
    const user = users.find(user => user.email === email && user.password === password);
    
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: 'Login successful',
      user: {
          name: user.name,
          vehicleNumber: user.vehicleNumber,
          balance: user.balance,
      }
    });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
