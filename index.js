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

const userRoutes = require('./src/routes/userRoute');
const classRoutes = require('./src/routes/classRoute');
const newFeedRoutes = require('./src/routes/newFeedRoute');
const commentRoutes = require('./src/routes/commentRoute');
const testRoutes = require('./src/routes/testRoute');
const questionRoutes = require('./src/routes/questionRoute');


app.use('/user', userRoutes);
app.use('/class', classRoutes);
app.use('/newfeed', newFeedRoutes);
app.use('/comment', commentRoutes);
app.use('/test', testRoutes);
app.use('/question', questionRoutes);


app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
