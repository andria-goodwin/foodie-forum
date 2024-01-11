const router = require('express').Router();
const { Food } = require('../../models');
const withAuth = require('../../utils/authority');

// post route for creating new food posts
// withAuth to prevent users from posting unless they are logged in
router.post('/', withAuth, async (req, res) => {
  console.log('THIS IS REQ.BODY', req.body);
  try {
    const newPost = await Food.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete route for deleting food posts
// withAuth to prevent users from deleting unless they are logged in
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Food.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
