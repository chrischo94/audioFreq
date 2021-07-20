const router = require('express').Router();
//Wiki and User is from the file in Models folder
const { Wiki, User, Favorite } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        //Get all wikis and JOIN with user data
        const wikiData = await Wiki.findAll({
            // JOIN with User, using the Favorite through table
            include: [{ model: User, through: Favorite, as: 'user_data'}],
        });
        // Serialize data so the template can read it
        const wikis = wikiData.map((wiki) => wiki.get({plain: true}));
        // Pass serialized data and session flag into template
         res.render('homepage', {
             wikis,
             logged_in: req.session.logged_in
         });
        //res.status(200).json(wikis);
    }catch (err){
        res.status(500).json(err);
    }
});

router.get('/category/:category', async (req, res) => {
  try {
      //Get all wikis and JOIN with user data
      const wikiData = await Wiki.findAll({
          // JOIN with User, using the Favorite through table
          where:{
            category: req.params.category,
          },
          include: [{ model: User, through: Favorite, as: 'user_data'}],
      });
      // Serialize data so the template can read it
      const wikis = wikiData.map((wiki) => wiki.get({plain: true}));
      // Pass serialized data and session flag into template
       res.render('results', {
           wikis,
           logged_in: req.session.logged_in
       });
      //res.status(200).json(wikis);
  }catch (err){
      res.status(500).json(err);
  }
});

router.get('/category/wiki/:id', async (req, res) => {
    try {
        const wikiData = await Wiki.findByPk(req.params.id, {
                include: [{ model: User, through: Favorite, as: 'user_data'}],
            });

        const wiki = wikiData.get({ plain: true });
            console.log(wiki);
        res.render('wiki', {
          ...wiki,
          logged_in: req.session.logged_in
        });
        //res.status(200).json(wiki);
      } catch (err) {
        res.status(500).json(err);
      }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Wiki, through: Favorite, as: 'wiki_data' }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
      //res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile'); //do we have 'profile' ??
      return;
    }
  
    res.render('login');
  });

  router.get('/new-wiki', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (!req.session.logged_in) {
      res.redirect('/profile'); //do we have 'profile' ??
      return;
    }
  
    res.render('postWiki');
  });

  router.post('/new-wiki', async (req, res) => {
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
  