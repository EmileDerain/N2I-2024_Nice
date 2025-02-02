import {buyUpgrade, calculateTotalGeneratedPerTick, checkUpgradeUnlock, initUpgrades} from "./upgrade_service.js";
import {createUser} from "../user_service.js";
import {sendEndGameEvent} from "../api/websocket/ws_helpers/event_handler/end_game_event_handler.js";

const maxTemperature = 5;

export function initGame(ws) {
    const user = createUser(ws);
    const currentYear = calculate_current_game_year(user.game);
    const upgradesList = Object.entries(user.game.upgrades).map(([id, data]) => (
        { id: parseInt(id), ...data }
    ));

    const gameInfo = {
        userId: user.id,
        game: {
            money: user.game.money,
            totalMoney: user.game.total_money,
            temperature: user.game.temperature,
            startYear: user.game.start_year,
            endYear: user.game.end_year,
            upgrades:upgradesList,
        }
    }
    return gameInfo;
}

export function createGame() {
    return {
        money: 1000,
        total_money: 1000,
        temperature: 0,
        start_year: 1882,
        end_year: 2100,
        current_tick: 0,
        total_ticks: 218,
        population: 0,
        upgrades: initUpgrades(1882),
        end_game: false,
    }
}

export function onGameTick(game, user) {
    if (game.end_game) {
        return game;
    }
    const total_generated_per_tick = calculateTotalGeneratedPerTick(game.upgrades);
    game.money += total_generated_per_tick.money - game.population * 0.00002;
    game.temperature += total_generated_per_tick.temperature;
    game.total_money += total_generated_per_tick.money;
    game.current_tick += 1;
    game.population += 60000;
    checkGameOver(game);
    checkUpgradeUnlock(game.upgrades, calculate_current_game_year(game), user);
    return game;
}

export function onBuyUpgrade(game, upgrade_id) {
    if (game.money < game.upgrades[upgrade_id].cost) {
        return false;
    }
    buyUpgrade(game.upgrades, upgrade_id);
    game.money -= game.upgrades[upgrade_id].cost;
    return true;
}

export function checkGameOver(game) {
    const end_game = game.temperature >= maxTemperature || game.money < 0 || game.current_tick >= game.total_ticks;
    game.end_game = end_game;
    return end_game;
}

export function calculate_current_game_year(game) {
    return game.start_year + game.current_tick;
}

export function getEndGameStatus(game) {
    if (game.money < 0) {
        return 0;
    } else if (game.temperature >= maxTemperature) {
        return 1;
    } else if (game.current_tick >= game.total_ticks) {
        return 2;
    }
}
