// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const foodsRouter = require('./foods.js');
const additivesRouter = require('./additives.js');
const foodPhotosRouter = require('./foodPhotos.js');
const reviewsRouter = require('./reviews.js');



router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});



router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/foods', foodsRouter);
router.use('/additives', additivesRouter);
router.use('/foodPhotos', foodPhotosRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;
