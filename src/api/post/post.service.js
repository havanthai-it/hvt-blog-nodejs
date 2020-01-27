const mongoose = require('mongoose');

const Post = require('./post.model');
const PostDao = require('./post.dao');

class UserService {

  constructor() { }

  static async create(postDto) {
    const post = new Post({
      _id: new mongoose.Types.ObjectId(),
      path: postDto.path,
      title: postDto.title
    });
    return PostDao.create(post);
  }

  static async get(page, pageSize) {
    return PostDao.get(page, pageSize);
  }

  static async getByPath(path) {
    return PostDao.getByPath(path);
  }

}

module.exports = UserService;
