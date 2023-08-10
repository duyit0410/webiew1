const path = require("path");

function createWebpackAliases(aliases) {
  const result = {};
  for (const name of aliases) {
    result['@'+name] = path.resolve(__dirname, '../src/'+name);
  }
  return result;
}

module.exports = {
  createWebpackAliases
}