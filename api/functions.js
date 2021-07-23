const saveContaienr = (obj, database) => {};
const addAsset = (obj, database) => {};
const removeAsset = (obj, database) => {};
const addInvite = (obj, database) => {};
const removeInvite = (obj, database) => {};
const findContainers = async (obj, database) => {
  console.log(obj);
  return await database.models.container.findAndCountAll({
    offset: +obj.offset,
    limit: +obj.limit,
    where: obj.where || {},
    include: [
      {
        model: database.models.container_asset,
        attributes: ["id", "url", "name", "version"],
      },
      {
        model: database.models.container_invite,
      },
    ],
  });
};

exports.saveContaienr = saveContaienr;
exports.addAsset = addAsset;
exports.removeAsset = removeAsset;
exports.addInvite = addInvite;
exports.removeInvite = removeInvite;
exports.findContainers = findContainers;
