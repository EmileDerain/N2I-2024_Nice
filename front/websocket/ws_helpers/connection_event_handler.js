import { onInit } from "../../game/on_init.js";
import { setUserId } from "../websocket_client.js";

export function onConnectionEvent(d) {
    const userId = d.userId;
    const game = d.game;

    if(userId === undefined || typeof(userId) !== "string"){
        console.log("Invalid userId format.");
        return;
    }

    if(game === undefined){
        console.log("Invalid game format.");
        return;
    }

    setUserId(userId);
    onInit(game);
}