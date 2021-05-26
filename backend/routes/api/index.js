// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const foodsRouter = require('./foods.js');
const additivesRouter = require('./additives');



router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});



router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/foods', foodsRouter);
router.use('/additives', additivesRouter);

module.exports = router;
