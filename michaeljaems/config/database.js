const path = require('path');



module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
  ssl: {
    rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
  }, 
  // add this line
  options: {
    ssl: env.bool('DATABASE_SSL', false),
  },
});
