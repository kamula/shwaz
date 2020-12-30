const http = require("http");
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method
        //console.log(req.url, req.method, req.headers);
    if (url === '/' && method === "POST") {
        const body = []
        req.on('data', chunck => {
            console.log(chunck)
            body.push(chunck)
            const parsedbody = Buffer.concat(body).toString()
            fs.writeFile('message.txt', parsedbody, (err) => {
                console.log(parsedbody)
            })

        })


    }

});

server.listen(3000);