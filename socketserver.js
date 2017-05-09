/**
 * Created by nubbe on 5/8/2017.
 */
console.log("hello");

var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

let SocketHandler = require("./SocketHandler").SocketHandler;
let socketHandler = new SocketHandler(io);

app.listen(80);

function handler (req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
};

socketHandler.EnableEvents();