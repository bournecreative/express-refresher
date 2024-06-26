const express = require('express')
const friendsRouter = require('./routes/friends.router')
const messageRouter = require('./routes/message.router')

const app = express()
const PORT = 3000

app.use((req, res, next) => {
    const start = Date.now()    
    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use(express.json())

app.use('/friends', friendsRouter)
app.use('/messages', messageRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})