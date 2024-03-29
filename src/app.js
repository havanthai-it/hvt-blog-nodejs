const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const Database = require('./db/database');
const postRoutes = require('./api/post/post.route');

// Connect to database
new Database().connect();

app.use(morgan('dev')); // Write log request in console
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/posts', postRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found!');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
