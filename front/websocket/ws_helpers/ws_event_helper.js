import { onConnectionEvent } from "./event_handler/connection_event_handler.js";


const opEvents = [
    { "op": 1, "function": onConnectionEvent }
]

export function onMessage(socket, data) {
    try {
        const dataString = data.toString('utf-8'); // Convert buffer in string
        const socketMessage = JSON.parse(dataString); // Parsing JSON

        const op = socketMessage.op;

        // Check op format
        if(op === undefined || typeof(op) !== "number") {
            console.log("Invalid op format");
            return;
        }

        // Search event from event list with the given op
        const event = opEvents.find(opEvent => opEvent.op === op);
        if(event === undefined) {
            console.log("Unknown op.");
            return;
        }

        // Calling event function
        event.function(user, socketMessage.d);
    }
    
    catch (e) {
        console.log(e.toString());
    }

}