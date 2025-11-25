module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'task_list',
    },
    migrations: {
      directory: './database/migrations',
    },
  },
};
