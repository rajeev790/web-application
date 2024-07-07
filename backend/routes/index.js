const express = require('express');
const authRoutes = require('./auth');
const fileRoutes = require('./files');

const router = express.Router();

router.use('/api', authRoutes);
router.use('/api', fileRoutes);

module.exports = router;