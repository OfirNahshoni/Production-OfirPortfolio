// portfolioRoute.js

const express = require('express');
const { sendEmailController } = require('../controllers/portfolioController');

// router object
const router = express.Router();

// routes
router.post('/send-email', sendEmailController);

// export 
module.exports = router;