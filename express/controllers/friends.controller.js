const model = require('../models/friends.model')

function getFriends(req, res) {
    res.json(model)
}

function getFriend(req, res) {
    const friendId = Number(req.params.id)
    const friend = model[friendId]
    if (friend) {
        res.json(friend)
    }else {
        res.status(404).json({
            error: 'Friend does not exist'
        })
    }
}

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        })
    }

    const newFriend = {
        name: req.body.name,
        id: model.length
    }

    model.push(newFriend)
    res.json(newFriend)
}

module.exports = {
    getFriends,
    getFriend,
    postFriend
}