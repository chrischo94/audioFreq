const router = require('express').Router();
const { Favorite } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    console.log('Hey Favorite');
    try {
        const newFav = await Favorite.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newFav);
    }catch (err){
        res.status(400).json(err);
    }
});

//router.delete('/:id', withAuth, async (req, res) => {
router.delete('/:id', async (req, res) => {
    try {
        const favData = await Favorite.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            }
        });
        if (!favData) {
            res.status(404).json({message: 'No favorite found with this id!'});
            return;
        }
        res.status(200).json(favData);
    }catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;