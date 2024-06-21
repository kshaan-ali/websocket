import  express  from "express"
import { WebSocket, WebSocketServer } from "ws"

const app= express()
const server = app.listen(8080)

const wss=new WebSocketServer({server:server})
wss.on('connection',function connection(socket){
//socket.on('error',function(e){console.log(e)})

    socket.on('message',function message(data, isBinary){
       console.log(data)
    })
   // socket.send('hello')
})