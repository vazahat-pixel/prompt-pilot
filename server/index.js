const express = require('express');
const authRoutes = require('./Router/authRoutes.js');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// const dotenv = require('dotenv');
// dotenv.config();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes );
const connectDB = require('./config/db.js');
connectDB(app.listen(3000))
app.listen(3000, () => {
    console.log("app is running on 3000")
})