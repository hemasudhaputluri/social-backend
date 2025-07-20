const express  = require('express');
const postRoutes = require('./postRoutes.js');
const authRoutes = require('./authRoutes.js');
const router = express.Router();

router.use('/posts', postRoutes);
router.use('/auth', authRoutes);


module.exports = router;