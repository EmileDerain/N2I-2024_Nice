import { sendError } from "../ws_event_helper.js";
import {onBuyUpgrade} from "../../../../game/game_service.js";

export function onUpgradeEvent(user, d) {
    const upgradeId = d.upgradeId;

    if(upgradeId === undefined || typeof(upgradeId) !== "number"){
        sendError(user.ws, "Invalid upgradeId format.");
        return;
    }

    const upgradeSuccess = onBuyUpgrade(user.game, upgradeId);
    sendConfirmUpgradeEvent(user, {
        upgradeId: upgradeId,
        quantity: user.game.upgrades[upgradeId].quantity,
        cost: user.game.upgrades[upgradeId].cost,
        temperature_generated: user.game.upgrades[upgradeId].temperature_generated,
    })
}

export function sendConfirmUpgradeEvent(user, confirmationPayload) {
    user.ws.send(JSON.stringify({
        op: 3,
        d: confirmationPayload
    }));
}