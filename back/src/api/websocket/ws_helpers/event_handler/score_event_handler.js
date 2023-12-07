export function sendScoreEvent(user, scores) {
    user.ws.send(SON.stringify({
        op: 13,
        d: scores
    }));
}