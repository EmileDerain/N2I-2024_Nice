export function onConnection(ws) {
    // TODO : Add ws to player
    console.log("[+] Client connected.");
    ws.send(JSON.stringify({ "op": 1 }))
}

export function onMessage(ws, data) {

}

export function onClose(ws) {
    removeClient(ws);
    console.log("[-] Client is disconnected.");
}

export function sendError(ws, message) {
    const res = {
        "op": 0,
        "d": {
            "message": message
        }
    }
    ws.send(JSON.stringify(res));
}