const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// Register a new user
router.post('/register', async (req, res) => {


    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        console.log('User registered successfully:', newUser);
        // Optionally, you can return the user data without the password
        const userResponse = {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email
        };
        res.status(201).json({ message: "User registered successfully", user: userResponse });

    } catch (error) {
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
});

// Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, abcd , { expiresIn: '1h' });

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
});
  // sabse pehele email find karna email exist nh he to email does not exist
  // bcrpt se compare karo agar password galat bataya to return invailid credentials same email ke liye bhi yh
  // jwt sign kardo token bejhdo 
  // res bejhdo login succeful token user._id 



// Logout a user
router.post('/logout', (req, res) => {
    const token = req.header.authorization?.split(' ')[1];
    res.setHeader('Authorization', ''); // Clear the token from the response header
    if (!token) {   
        return res.status(400).json({ message: "No token provided" });
    }
    res.status(200).json({ message: "User logged out successfully" });
});

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, abcd);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}



module.exports = { router, authMiddleware };
