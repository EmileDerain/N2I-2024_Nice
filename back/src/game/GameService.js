import { init_upgrades } from "./UpgradeService.js";

export function createGame() {
    return {
        money: 0,
        total_money: 0,
        temperature: 0,
        start_year: 1900,
        end_year: 2100,
        current_tick: 0,
        total_ticks: 10400,
        upgrades: init_upgrades(),
    }
}

export function pass_game_tick(game) {
    if (check_game_over(game)) {
        return false;
    }
    const total_generated_per_tick = calculate_total_generated_per_tick(game.upgrades);
    game.money += total_generated_per_tick.money;
    game.temperature += total_generated_per_tick.temperature;
    game.total_money += total_generated_per_tick.money;
    game.current_tick += 1;
    return true;
}

export function buy_upgrade(game, upgrade_id) {
    if (game.money < game.upgrades[upgrade_id].cost) {
        return;
    }
    buy_upgrade(game.upgrades, upgrade_id);
    game.money -= game.upgrades[upgrade_id].cost;
}

export function check_game_over(game) {
    return game.temperature < 1.5 && game.money > 0 && game.current_tick < game.total_ticks
}