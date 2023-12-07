import { onUpgradeEvent } from "./event_handler/upgrade_event_handler.js";

const opEvents = [
    { "op": 10, "function": onUpgradeEvent }
]

export function onConnection(ws) {
    // TODO : Add ws to player
    console.log("[+] Client connected.");
    ws.send(JSON.stringify({ 
        "op": 1,
        "d": {
            "id": 0
        }
    }))
}

export function onMessage(ws, data) {
    try {
        const dataString = data.toString('utf-8'); // Convert buffer in string
        const socketMessage = JSON.parse(dataString); // Parsing JSON

        const op = socketMessage.op;
        if(op == null && typeof(op) !== "number") {
            sendError(ws, "Invalid op format");
            return;
        }

        // Search event from event list
        const event = opEvents.find(opEvent => opEvent.op === op);

        if(event === undefined) {
            sendError(ws, "Unknown op.");
            return;
        }

        event.function(ws, socketMessage.d);
    } 
    
    catch (e) {
        sendError(ws, e.toString());
    }

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