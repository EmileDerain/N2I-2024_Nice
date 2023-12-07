import {calculate_current_game_year} from "../../../../game/game_service.js";

export function sendScoreEvent(user, scores) {
    user.ws.send(SON.stringify({
        op: 13,
        d: scores
    }));
}