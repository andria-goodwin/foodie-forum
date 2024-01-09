const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');

// router.use('/users', userRoutes);
router.use('/post', foodRoutes);

module.exports = router;