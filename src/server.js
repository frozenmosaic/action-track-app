const express = require('express')
const app = express();

const hostname = "http://localhost"
const port = 3000

const server = express.createServer(app);

app.get('/express', (req, res) => {
    res.send({express: 'YOUR EXPRESS BACKED IS CONNECTED'})
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})