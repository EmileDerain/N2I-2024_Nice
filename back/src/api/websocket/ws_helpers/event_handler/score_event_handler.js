export function sendScoreEvent(user, scores) {
    console.log(scores)
    user.ws.send(JSON.stringify({
        op: 2,
        d: scores
    }));
}