import { createGame } from './game/game_service.js';
import { generateRandomString } from "./utilities/utils.js";

let users = {};

export function createUser(ws) {
    let user = {
        id: generateRandomString(16),
        ws: ws,
        game: createGame()
    }
    users[user.id] = user;
    return user;
}

export function findUser(userId) {
    return users[userId];
}

export function removeUser(ws) {
    delete users[ws.id];
}