const express = require('express');
const BlogController = require('../Controllers/BlogController');
const contactController = require('../Controllers/contactController');
const router = express.Router();

router.get('/getall',BlogController.getall)
router.post('/bloginsert',BlogController.bloginsert)
router.get('/blogview/:id',BlogController.blogview)
router.put('/blogupdate/:id',BlogController.updateblog)
router.get('/blogdelete/:id',BlogController.deleteblog)
router.get('/contactall',contactController.contactall)
router.post('/contactinsert',contactController.contactinsert)










module.exports = router;