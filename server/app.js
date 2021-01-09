// fresh vue install... v4 will be customizations

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// define app
const app = express();

// middleware for dependencies

app.use(bodyParser.json());
app.use(cors());

const api = require('./routes/api.js');

app.use('/api', api);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`app running on port ${port}`));
