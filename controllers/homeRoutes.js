const router = require('express').Router();

// get route to render 'index.handlebars'
router.get('/', (req, res) => {
    res.render('index');
});

// get route to render 'login.handlebars'
router.get('/login', (req, res) => {
    res.render('login');
});

// get route to render 'post.handlebars'
router.get('/post', (req, res) => {
    res.render('post');
});

module.exports = router;