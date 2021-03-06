if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load({path: './local.env'})
}

console.log(process.env)
module.exports = {
  development: {
      client: 'pg',
      connection: {
        database: 'draftstone',
        host: 'localhost'
      },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: {
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        database: process.env.RDS_DB,
        password: process.env.RDS_PASSWORD,
        port: 5432
      },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};
