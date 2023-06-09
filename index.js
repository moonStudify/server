require('dotenv').config();
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')
const bodyParser = require('body-parser')

//#region ENV
const port = process.env.PORT || 5000;
const mongoString = process.env.DATABASE_URL;
const hostUrl = process.env.HOST_URL || `localhost:${port}`
//#endregion

//#region MongoDB
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect(mongoString);

const database = mongoose.connection;
database.on('error', (error) => {
  console.log(error);
});
database.once('connected', () => {
  console.log('Database Connected');
});
//#endregion

const app = express();
app.use(morgan('dev'));
app.use(helmet());

app.use(
  cors({
    origin: "*",
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  '/docs', swaggerUi.serve,
  swaggerUi.setup(
    swaggerFile,
    {
      swaggerOptions: {
        persistAuthorization: true
      }
    }
  )
)

//#region Routes
const authRoutes = require('./src/routes/authRoute');
const userRoutes = require('./src/routes/userRoute');
const classRoutes = require('./src/routes/classRoute');
const classStudentRoutes = require('./src/routes/classStudentRoute');
const newFeedRoutes = require('./src/routes/newFeedRoute');
const commentRoutes = require('./src/routes/commentRoute');
const testRoutes = require('./src/routes/testRoute');
const questionRoutes = require('./src/routes/questionRoute');
const takeTestRoutes = require('./src/routes/takeTestRoute');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/class', classRoutes);
app.use('/classstudent', classStudentRoutes);
app.use('/newfeed', newFeedRoutes);
app.use('/comment', commentRoutes);
app.use('/test', testRoutes);
app.use('/question', questionRoutes);
app.use('/taketest', takeTestRoutes);
//#endregion

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
