import {calculate_current_game_year, onGameTick} from "../../../../game/game_service.js";
import {sendScoreEvent} from "./score_event_handler.js";

export function onTickEvent(user) {
    console.log("Game tick event");
    const game = onGameTick(user.game);
    const scores = {
        money: game.money,
        total_money: game.total_money,
        temperature: game.temperature,
        year: calculate_current_game_year(game),
    }
    sendScoreEvent(user, scores);
}