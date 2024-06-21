"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ws_1 = require("ws");
var app = (0, express_1.default)();
var server = app.listen(8080);
var wss = new ws_1.WebSocketServer({ server: server });
wss.on('connection', function connection(socket) {
    //socket.on('error',function(e){console.log(e)})
    socket.on('message', function message(data, isBinary) {
        console.log(data);
    });
    // socket.send('hello')
});
