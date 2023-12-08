export function sendEndGameEvent(user, endType) {
    user.ws.send(JSON.stringify({
        op: 4,
        d: {
            type: endType
        }
    }));
}