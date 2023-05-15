const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
// newController.index;
router.use('/:slug', newController.show);
router.use('/', newController.index);
module.exports = router;
