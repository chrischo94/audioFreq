const router = require('express').Router();
const userRoutes = require('./userRoutes');
const wikiRoutes = require('./wikiRoutes');
const favoriteRoutes = require('./favoriteRoutes');

router.use('/users', userRoutes);
router.use('/wiki', wikiRoutes);
router.use('/favorite', favoriteRoutes);

module.exports = router;