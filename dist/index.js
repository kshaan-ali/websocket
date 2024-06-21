"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const server = app.listen(8080);
const wss = new ws_1.WebSocketServer({ server: server });
wss.on('connection', function connection(socket) {
    //socket.on('error',function(e){console.log(e)})
    socket.on('message', function message(data, isBinary) {
        console.log(data);
    });
    // socket.send('hello')
});
