import { userId } from "../websocket_client";

export function sendUpgrade(upgradeId) {
    sendMessage(10, { upgradeId });
}

export function sendTick() {
    sendMessage(11);
}

function sendMessage(op, d) {
    socket.send(JSON.stringify({
        op,
        userId,
        d
    }));
}