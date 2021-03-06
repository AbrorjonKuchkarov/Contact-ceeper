const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {check, validationResult} = require('express-validator');

//@route              POST api/users
//@desc              Register a user
//@access          Public
router.post('/', [check('name', 'name is required' ).not().isEmpty() ], (req, res) => {
   res.send(req.body);
} );

module.exports = router;