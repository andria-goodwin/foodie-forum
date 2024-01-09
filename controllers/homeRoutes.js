const router = require('express').Router();

// get route to render 'post.handlebars'
router.get('/post', (req, res) => {
    res.render('post');
});

module.exports = router;