import { createUser, findUser } from "../../../UserService.js";
import { onUpgradeEvent } from "./event_handler/upgrade_event_handler.js";

const opEvents = [
    { "op": 10, "function": onUpgradeEvent }
]

export function onConnection(ws) {
    console.log("[+] Client connected.");
    ws.send(JSON.stringify({ 
        "op": 1,
        "d": {
            "userId": createUser(ws)
        }
    }))
}

export function onMessage(ws, data) {
    try {
        const dataString = data.toString('utf-8'); // Convert buffer in string
        const socketMessage = JSON.parse(dataString); // Parsing JSON

        const userId = socketMessage.userId;
        const op = socketMessage.op;

        // Check userId format
        if(userId === undefined  || typeof(userId) !== "string") {
            sendError(ws, "Invalid userId format.");
            return;
        }

        // Getting user form userId
        const user = findUser(socketMessage.userId);
        if(user === undefined) {
            sendError(ws, "userId not found.");
            return;
        }

        // Check op format
        if(op === undefined || typeof(op) !== "number") {
            sendError(ws, "Invalid op format.");
            return;
        }

        // Search event from event list with the given op
        const event = opEvents.find(opEvent => opEvent.op === op);
        if(event === undefined) {
            sendError(ws, "Unknown op.");
            return;
        }

        // Calling event function
        event.function(user, socketMessage.d);
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