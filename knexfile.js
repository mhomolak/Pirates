// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'pirates_development'
    }
  },


  production: {
    client: 'postgresql',
    connection: {
      database: 'pirates_development',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'pirates'
    }
  }

};
