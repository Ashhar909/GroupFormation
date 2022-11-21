const express = require('express')
const router = express.Router();
const {FetchUser} = require('../Middleware/FetchUser')
const UserController = require('../Controllers/UserController')
const GroupController = require('../Controllers/GroupController')
const NotificationController = require('../Controllers/NtfController')

router.post('/createUser', UserController.createUser);
router.post('/login', UserController.login);
router.get('/getGroup',FetchUser, GroupController.getGroup);
router.put('/joingrp',FetchUser, GroupController.joinGroup);
router.put('/creategroup',FetchUser, GroupController.createGroup);
router.put('/leavegroup',FetchUser, GroupController.leaveGroup);
router.get('/getmentors',FetchUser,NotificationController.getMentors)


module.exports = router;