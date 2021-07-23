const database = require("./database").default;

const saveContaienr = (obj, database, models) => {};
const addAsset = (obj, database, models) => {};
const removeAsset = (obj, database, models) => {};
const addInvite = (obj, database, models) => {};
const removeInvite = (obj, database, models) => {};
const findContainers = (obj, database, models) => {
  console.log(database);
  return []
};

exports.saveContaienr = saveContaienr;
exports.addAsset = addAsset;
exports.removeAsset = removeAsset;
exports.addInvite = addInvite;
exports.removeInvite = removeInvite;
exports.findContainers = findContainers;
