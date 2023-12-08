export function sendUpgradeUnlockEvent(user, upgradeId) {
    user.ws.send(JSON.stringify({
        op: 5,
        d: upgradeId,
    }));
}