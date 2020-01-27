const postModel = require('./post.model');

class PostDao {

  static async create(post) {
    return post.save();
  }

  static async get(page, pageSize) {
    return postModel
            .find()
            .skip(page * pageSize)
            .limit(pageSize)
            .sort({ date: -1 });
  }

  static async getByPath(path) {
    return postModel.findOne({ path: path }).exec();
  }

}

module.exports = PostDao;
