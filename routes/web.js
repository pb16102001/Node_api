const express = require('express');
const BlogController = require('../Controllers/BlogController');
const router = express.Router();

router.get('/getall',BlogController.getall)
router.post('/bloginsert',BlogController.bloginsert)
//router.get('/display',BlogController.display)







module.exports = router;