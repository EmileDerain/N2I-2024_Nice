import {calculate_current_game_year, getEndGameStatus, onGameTick} from "../../../../game/game_service.js";
import {sendScoreEvent} from "./score_event_handler.js";
import {sendEndGameEvent} from "./end_game_event_handler.js";

export function onTickEvent(user) {
    const game = onGameTick(user.game, user);
    const scores = {
        money: game.money,
        total_money: game.total_money,
        temperature: game.temperature.toFixed(2),
        year: calculate_current_game_year(game),
    }
    sendScoreEvent(user, scores);
    if (game.end_game) {
        sendEndGameEvent(user, getEndGameStatus(game));
    }
}