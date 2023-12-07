import {calculate_current_game_year} from "../../../../game/game_service.js";

export function sendScoreEvent(user, scores) {
    user.ws.send(JSON.stringify({
        op: 2,
        d: scores
    }));
}