import { sendError } from "../ws_event_helper.js";
import {buyUpgrade} from "../../../../game/game_service.js";

export function onUpgradeEvent(user, d) {
    const upgradeId = d.upgradeId;

    if(upgradeId === undefined || typeof(upgradeId) !== "number"){
        sendError(user.ws, "Invalid upgradeId format.");
        return;
    }

    console.log("Upgrade event, upgradeId is " + upgradeId);
    const upgradeSuccess = buyUpgrade(user.game, upgradeId)
}

export function sendConfirmUpgradeEvent(user, confirmationPayload) {
    user.ws.send(JSON.stringify({
        op: 3,
        d: confirmationPayload
    }));
}