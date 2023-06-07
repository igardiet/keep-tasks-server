require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/user');
const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  next();
});

app.use('/api/tasks', taskRoutes);
app.use('/api/user', userRoutes);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('Connection to database successfull!');

    app.listen(process.env.PORT || 3027, () => {
      console.log(`Server listening on PORT... ${process.env.PORT || 3027}`);
    });
  })
  .catch((error) => {
    console.warn(error);
  });
