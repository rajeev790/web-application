const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const routes = require('./routes');
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});