const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');
const userRoutes = require('./userRout');

// router.use('/users', userRoutes);
router.use('/food', foodRoutes);
router.use('/users', userRoutes);

module.exports = router;