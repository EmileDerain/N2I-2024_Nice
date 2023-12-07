import { init_upgrades } from "./upgrade_service.js";
import {createUser} from "../user_service.js";

export function initGame(ws) {
    return createUser(ws);
}

export function createGame() {
    return {
        money: 0,
        total_money: 0,
        temperature: 0,
        start_year: 1900,
        end_year: 2100,
        current_tick: 0,
        total_ticks: 10400,
        population: 1600000,
        upgrades: init_upgrades(),
        end_game: false,
    }
}

export function onGameTick(game) {
    if (end_game) {
        return game;
    }
    const total_generated_per_tick = calculate_total_generated_per_tick(game.upgrades);
    game.money += total_generated_per_tick.money - game.population * 0.001;
    game.temperature += total_generated_per_tick.temperature;
    game.total_money += total_generated_per_tick.money;
    game.current_tick += 1;
    game.population += 50000;
    checkGameOver(game);
    return game;
}

export function buyUpgrade(game, upgrade_id) {
    if (game.money < game.upgrades[upgrade_id].cost) {
        return false;
    }
    buy_upgrade(game.upgrades, upgrade_id);
    game.money -= game.upgrades[upgrade_id].cost;
    return true;
}

export function checkGameOver(game) {
    const end_game = game.temperature < 1.5 && game.money > 0 && game.current_tick < game.total_ticks
    game.end_game = end_game;
    return end_game;
}

export function calculate_current_game_year(game) {
    return game.start_year + Math.floor((game.current_tick / 4) / 12);
}