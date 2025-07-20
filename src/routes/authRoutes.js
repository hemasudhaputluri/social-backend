const express = require('express');
const router = express.Router();

router.post('/login', register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;