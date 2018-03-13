/*

  Postgresio will look for a file named pgio-config.js in the current working
  directory. If not found we will fail.

  However, as shown below, this file can default to using environment
  variables.

  If you keep your secrets in this file rather than using environment variables
  it's best to keep the file outside of your project like so.

  exports = module.exports = require('../pgio-somecfg');

  Config options are documented here:
  https://node-postgres.com/features/connecting

  node-postgres uses the following environment variables.

  PGHOST='localhost'
  PGUSER=process.env.USER
  PGDATABASE=process.env.USER
  PGPASSWORD=null
  PGPORT=5432

  We added the following.

  PGSSL=false

  Because you may want to stream data out of one PostgreSQL instance and into
  another, we have also look for the following environment variables.

  PGIO_SRC_HOST='localhost'
  PGIO_SRC_USER=process.env.USER
  PGIO_SRC_DATABASE=process.env.USER
  PGIO_SRC_PASSWORD=null
  PGIO_SRC_PORT=5432
  PGIO_SRC_SSL=false

  PGIO_DEST_HOST='localhost'
  PGIO_DEST_USER=process.env.USER
  PGIO_DEST_DATABASE=process.env.USER
  PGIO_DEST_PASSWORD=null
  PGIO_DEST_PORT=5432
  PGIO_DEST_SSL=true

*/

var fs = require('fs');
if (fs.existsSync('../../candoris/pgio-config.js')) {
  exports = module.exports = require('../../candoris/pgio-config');
} else {
  exports = module.exports = {
    source: {
      host: process.env.PGIO_SRC_HOST || process.env.PGHOST || 'localhost',
      user: process.env.PGIO_SRC_USER || process.env.PGUSER || 'pgio',
      database: process.env.PGIO_SRC_DATABASE || process.env.PGDATABASE || 'pgio',
      password: process.env.PGIO_SRC_PASSWORD || process.env.PGPASSWORD || 'pgio',
      port: process.env.PGIO_SRC_PORT || process.env.PGPORT || 5432,
      ssl: process.env.PGIO_SRC_SSL || process.env.PGSSL || true
    },
    dest: {
      host: process.env.PGIO_DEST_HOST || process.env.PGHOST || 'localhost',
      user: process.env.PGIO_DEST_USER || process.env.PGUSER || 'pgio',
      database: process.env.PGIO_DEST_DATABASE || process.env.PGDATABASE || 'pgio',
      password: process.env.PGIO_DEST_PASSWORD || process.env.PGPASSWORD || 'pgio',
      port: process.env.PGIO_DEST_PORT || process.env.PGPORT || 5432,
      ssl: process.env.PGIO_DEST_SSL || process.env.PGSSL || true
    }
  };
}