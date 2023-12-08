import Fastify from 'fastify'
import { findUser } from '../../user_service.js';

let users = []

export const fastify = Fastify({ logger: true });

fastify.get('/api/leaderboard', async function handler (request, reply) {
  const leaderboard = users.map(user => ({
    username: user.username,
    totalMoney: user.totalMoney,
    temperature: user.temperature
  }));

  return leaderboard;
})

fastify.post('/api/leaderboard', async function handler (request, reply) {
  const { userId, username } = request.body;

  // Check userId format.
  if(userId === undefined || typeof(userId) !== "string") {
    reply.code(400).send({ error: 'Malformed userId.' })
    return;
  }

  // Check username format.
  if(userId === undefined || typeof(username) !== "string") {
    reply.code(400).send({ error: 'Malformed username.' })
    return;
  }

  // Check username length.
  if(username.length > 20) {
    reply.code(400).send({ error: 'Username too long.' })
    return;
  }

  // Check if user already exist
  const isExisting = users.find(user => user.userId === userId) !== undefined;
  if(isExisting) {
    reply.code(409).send({ error: 'userId already registered.' })
    return;
  }

  // Find user
  const user = findUser(userId);
  if(user === undefined) {
    reply.code(404).send({ error: 'User not found.' })
    return;
  }

  users.push({
    userId: userId,
    username: username,
    totalMoney: user.game.total_money,
    temperature: user.game.temperature
  });

  return { success: true, message: 'User added successfully' }
})
