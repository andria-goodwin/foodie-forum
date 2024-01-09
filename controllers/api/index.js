const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');
const userRoutes = require('./userRout');

<<<<<<< HEAD
// router.use('/post', foodRoutes);
=======
// router.use('/users', userRoutes);
>>>>>>> d31c8486463094f59f0d84c546e6c690f32d8163
router.use('/post', foodRoutes);
router.use('/users', userRoutes);

module.exports = router;