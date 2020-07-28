const { Client } = require("pg");
const connectionString =
  "postgres://bldvzcgf:QbDpxTYGwlnDrhDag5CGoPLSoxXiZReU@balarama.db.elephantsql.com:5432/bldvzcgf";

const client = new Client({
  connectionString: connectionString
});
client.connect();

module.exports = client;
