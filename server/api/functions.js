const saveContainer =  async(container, database, user) => {
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
      ...container,
      is_private: container.is_private ? 1 : 0,
      html_snippet: container.html_snippet ? 1 : 0
    })
  }else {
    item = await database.models.container.create({
      ...container,
      is_private: container.is_private ? 1 : 0,
      html_snippet: container.html_snippet ? 1 : 0,
      title: container.title || `Untitled container ${user && user.name}`,
      userId: user.id,
    });
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
    order: [["id","desc"]]
  });
};

exports.saveContainer = saveContainer;
exports.addAsset = addAsset;
exports.removeAsset = removeAsset;
exports.addInvite = addInvite;
exports.removeInvite = removeInvite;
exports.findContainers = findContainers;
