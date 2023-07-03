// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config = {
  client: 'pg',
  migrations: {
    directory: './migrations',
  },
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'learn-user',
    password: 'allthesecrets',
    database: 'learn-db',
  },
};

export default config;
