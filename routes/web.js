const express = require('express');
const BlogController = require('../Controllers/BlogController');
const contactController = require('../Controllers/contactController');
const UserController = require('../Controllers/UserController');
const router = express.Router();

router.get('/getall',BlogController.getall)
router.post('/bloginsert',BlogController.bloginsert)
router.get('/blogview/:id',BlogController.blogview)
router.put('/blogupdate/:id',BlogController.updateblog)
router.delete('/blogdelete/:id',BlogController.deleteblog)
router.get('/contactall',contactController.contactall)
router.post('/contactinsert',contactController.contactinsert)


//userController
router.post('/register',UserController.user_registration)







module.exports = router;