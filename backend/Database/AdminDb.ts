import Knex from "knex";

export const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'hox',
      password : '123456',
      database : 'fixxdb'
    }
  });
