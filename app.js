const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const crudRoutes = require('./routes/crud');

const app = express();

dotenv.config();

app.use(cors());

app.use(bodyParser.json());

app.use(crudRoutes);

mongoose.connect(process.env.MONGO_URL).then((result) => {
    console.log("Database Connected!");
    app.listen(8080);
}).catch((err) => {
    console.log(err);
});