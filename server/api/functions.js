const saveContainer =  async(container, database) => {
  let item;
  if (container.id) {
    item = await database.models.container.findOne({
      where: {
        slug: container.slug
      }
    })
    if (!item) {
      return {
        status: 404,
        message: "No container found",
        data: {}
      }
    }
    item = await item.update({
      ...container
    })
  }else {
    item = await database.models.container.create(container);
  }
  return {
    status: 200,
    message: "Container created",
    data: item
  }
};
const addAsset = (obj, database) => {};
const removeAsset = (obj, database) => {};
const addInvite = (obj, database) => {};
const removeInvite = (obj, database) => {};
const findContainers = async (obj, database) => {
  if (!database || !obj) {
    return;
  }
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

exports.saveContainer = saveContainer;
exports.addAsset = addAsset;
exports.removeAsset = removeAsset;
exports.addInvite = addInvite;
exports.removeInvite = removeInvite;
exports.findContainers = findContainers;
