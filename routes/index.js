const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// API Routes
router.use('/api', apiRoutes);

// Homepage Routes
router.use('/', homeRoutes);

module.exports = router;
