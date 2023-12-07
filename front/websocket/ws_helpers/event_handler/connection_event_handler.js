import { setUserId } from "../../game/state";

export function onConnectionEvent(d) {
    const userId = d.userId;

    if(userId === undefined || typeof(userId) !== "number"){
        console.log("Invalid userId format.");
        return;
    }

    setUserId(userId);
}