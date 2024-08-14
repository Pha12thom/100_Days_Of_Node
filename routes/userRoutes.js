const express = require('express');
const app = express();
const fetch = require('../controller/userController.js');
const create = require('../controller/userController.js');
const router = express.Router();

router.get('/fetch', fetch)
router.post('/create', create);


module.exports = router;