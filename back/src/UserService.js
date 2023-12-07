import { createGame } from './game/GameService.js';
import { generateRandomString } from "./utilities/Utils.js";

let users = [];

export function createUser(ws) {
    let user = {
        id: generateRandomString(16),
        ws: ws,
        game: createGame()
    }
    users.push(user);

    return user.id;
}

export function findUser(userId) {
    return users.find(user => user.id === userId);
}

export function removeUser(ws) {
    users = users.filter(user => user.ws !== ws);
}