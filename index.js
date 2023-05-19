require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT || 5000;
mongoose.set('strictQuery', false);
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});
const app = express();
app.use(cors());
app.use(express.json());

const routes = require('./src/routes/routes');
const userRoutes = require('./src/routes/User');

app.use('/api', routes);
app.use('/student', userRoutes);

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
