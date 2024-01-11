const router = require('express').Router();

const foodRoutes = require('./foodRoutes');
const userRoutes = require('./userRout');

router.use('/post', foodRoutes);
router.use('/users', userRoutes);

module.exports = router;