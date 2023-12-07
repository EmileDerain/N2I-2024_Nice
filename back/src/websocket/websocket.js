import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });


export function startWebSocket() {
    wss.on('listening', () => console.log('Server listening on port 8080'));

    wss.on('connection', (ws) => {
        console.log("onConnection")
        ws.on('message', (data) => console.log("onMessage(ws, data)"));
        ws.on('close', () => console.log("onClose(ws)"));
    });
}

