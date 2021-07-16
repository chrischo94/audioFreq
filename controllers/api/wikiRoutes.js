const router = require('express').Router();
const { Wiki } = require('../../models/');

router.post('/', async (req, res) => {
    try {
      const newWiki = await Wiki.create({
        ...req.body,
      });
  
      res.status(200).json(newWiki);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
