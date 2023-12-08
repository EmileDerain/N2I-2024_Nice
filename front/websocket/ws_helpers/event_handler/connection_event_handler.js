import { initGame } from "../../game/game_facade.js";
import { setUserId } from "../../game/state.js";

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
    initGame(game);
}