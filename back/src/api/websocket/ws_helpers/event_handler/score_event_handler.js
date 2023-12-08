export function sendScoreEvent(user, scores) {
    user.ws.send(JSON.stringify({
        op: 2,
        d: scores
    }));
}