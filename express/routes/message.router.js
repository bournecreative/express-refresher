const express = require('express')

const messageController = require('../controllers/messages.controller')

const messageRouter = express.Router()

messageRouter.get('/', messageController.getMessages)

module.exports = messageRouter
