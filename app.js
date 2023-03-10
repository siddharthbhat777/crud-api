const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const crudRoutes = require('./routes/crud');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/crud', crudRoutes);

mongoose.connect('mongodb+srv://siddharthdb:SidB2023@democrudapp.q8iswld.mongodb.net/crud?retryWrites=true&w=majority').then((result) => {
    console.log("Database Connected!");
    app.listen(8080);
}).catch((err) => {
    console.log(err);
});