const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');

const creds = require('./client_secret.json');

async function accessSpreadsheet(){
  const doc = new GoogleSpreadsheet("1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms");
  await promisify(doc.userServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];
  console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`);
}

accessSpreadsheet()
  .catch(err => console.log(err));
