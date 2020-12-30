const http = require("http");
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method
        //console.log(req.url, req.method, req.headers);
    if (url === '/') {
        fs.writeFile('message.txt', 'Dummy', (err) => {
            console.log("file created")
        })

    }

});

server.listen(3000);