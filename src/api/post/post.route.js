const express = require('express');
const router = express.Router();

const postController = require('./post.controller');

router.post('/', postController.create);
router.get('/', postController.get);
router.get('/detail', postController.getByPath);

module.exports = router;
