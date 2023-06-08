import { getConnection } from 'typeorm';

export const getAllTodo = () => getConnection().query(`SELECT * FROM "Todo"`);

export const getAllId = () => getConnection().query(`SELECT id FROM "Todo"`);

// export const setNewTask = () => getConnection().query(`INSERT `);
