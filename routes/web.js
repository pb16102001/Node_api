const express = require('express');
const BlogController = require('../Controllers/BlogController');
const contactController = require('../Controllers/contactController');
const router = express.Router();

router.get('/getall',BlogController.getall)
router.post('/bloginsert',BlogController.bloginsert)
router.get('/blogview/:id',BlogController.blogview)
router.get('/contactall',contactController.contactall)
router.post('/contactinsert',contactController.contactinsert)










module.exports = router;