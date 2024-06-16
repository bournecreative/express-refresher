const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
    // the request and the response are streams. We can listen on these streams using the .on
    // the res is writeable stream
    if (req.url === '/menu') {
        res.writeHead(200, {
            'Content-Type': 'text/plain',
            'access-control-allow-origin' : '*'
        })
        res.end(JSON.stringify(
        [{
            id: 1,
            name: "Burger"
        },
        {
            id: 2,
            name: "Hot dog"
        },
        {
            id: 3,
            name: "Corn Dog"
        }]
        )) 
    }

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<div>')
        res.write("<a href='/menu'>Go to the menu</a>")
        res.write('</div>')
        res.write('</body>')
        res.write('</html>')
    }
    
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})