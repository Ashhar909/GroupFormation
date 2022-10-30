const express = require('express')
const router = express.Router();
const {FetchUser} = require('../Middleware/FetchUser')
const UserController = require('../Controllers/UserController')

router.post('/createUser', UserController.createUser);
router.post('/login', UserController.login);
router.get('/getGroup',FetchUser, UserController.getGroup);
router.put('/joingrp',FetchUser, UserController.joinGroup);
router.put('/creategroup',FetchUser, UserController.createGroup);
router.put('/leavegroup',FetchUser, UserController.leaveGroup);

module.exports = router;