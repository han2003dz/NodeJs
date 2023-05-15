const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
// newController.index;
router.use('/:slug', siteController.show);
router.use('/', newController.index);
module.exports = router;
