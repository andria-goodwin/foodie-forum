const router = require('express').Router();
const { Food, User } = require('../models');
const withAuth = require('../utils/authority');

// get route to render 'index.handlebars' with food posts
router.get('/', async (req, res) => {
    const foodData = await Food.findAll().catch((err) => { 
      res.json(err);
    });
    // We use map() to iterate over foodData and then add .get({ plain: true }) each object to serialize it. 
    const foods = foodData.map((food) => food.get({ plain: true }));
    // We render the template, 'index', passing in foods, a new array of serialized objects.
    res.render('index', { foods });
});

// get route to render 'post.handlebars'
router.get('/post', withAuth, async (req, res) => {

  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Food }],
    });

    const user = userData.get({ plain: true });
    
    res.render('post', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
  
// get route to render "login.handlebars" or redirect to profile page if already logged in
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/post');
    return;
  }

<<<<<<< HEAD
// router.get('/profile', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//         include: [{ model: Food }],
//       });
  
//       const user = userData.get({ plain: true });
  
//       res.render('post', {
//         ...user,
//         logged_in: true
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/post');
      return;
    }
  
    res.render('login');
  });
=======
  res.render('login');
});
>>>>>>> 8dfa494f1688ee39a7d8221fbdca6f7a6e71b610

module.exports = router;