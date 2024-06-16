const express = require('express')

const friendController = require('../controllers/friends.controller')

const friendsRouter = express.Router()

friendsRouter.post('/', friendController.postFriend)
friendsRouter.get('/', friendController.getFriends)
friendsRouter.get('/:id', friendController.getFriend)

module.exports = friendsRouter
