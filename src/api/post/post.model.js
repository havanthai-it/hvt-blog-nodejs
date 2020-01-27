const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,

  path: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  short_desc: {
    type: String,
    required: true
  },

  content: {
    type: String,
    required: true
  },

  image: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Post', postSchema);
