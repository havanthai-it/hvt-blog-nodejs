const PostService = require('./post.service');

exports.create = async (req, res) => {
  try {
    const postDto = JSON.parse(req.body);
    await PostService.create(postDto);
    return res.status(200).json({ message: 'Created' });
  }
  catch(e) {
    res.status(500).json({ message: e });
  }
}

exports.get = async (req, res) => {
  try {
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const pageSize = req.query.page_size ? parseInt(req.query.page_size) : 10;
    const result = await PostService.get(page, pageSize);
    res.status(200).json(result);
  }
  catch(e) {
    res.status(500).json({ message: e });
  }
}

exports.getByPath = async (req, res) => {
  try {
    let path = req.query.path;
    const result = await PostService.getByPath(path);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(200).json({ message: 'Not found' });
    }
  }
  catch(e) {
    res.status(500).json({ message: e });
  }
}
