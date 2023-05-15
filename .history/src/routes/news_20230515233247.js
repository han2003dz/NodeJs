const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewController');
// newController.index;
router.use('/', newController.index);
router.use('/:slug', newController.index);
module.exports = router;
