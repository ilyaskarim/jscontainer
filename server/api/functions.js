const randomstring = require("randomstring");
const { omit } = require("lodash");

const saveContainer = async (container, database, user) => {
  let redirect = true;
  let item;
  if (container.id && user && container.userId === user.id) {
    item = await database.models.container.findOne({
      where: {
        slug: container.slug,
      },
    });
    if (!item) {
      return {
        status: 404,
        message: "No container found",
        data: {},
      };
    }
    item = await item.update({
      ...container,
      is_private: container.is_private ? 1 : 0,
      html_snippet: container.html_snippet ? 1 : 0,
    });
    redirect = false;
  } else {
    item = await database.models.container.create({
      ...omit(container, ["id"]),
      is_private: container.is_private ? 1 : 0,
      html_snippet: container.html_snippet ? 1 : 0,
      title: container.title || `Untitled container ${user ? user.name : ""}`,
      userId: user && user.id,
      forkedFrom: container.id,
      slug: randomstring.generate({
        length: 14,
        charset: "asdfghzxc12345679ia89sda8d9ad89",
      }),
    });
  }
  return {
    status: 200,
    message: "Container saved",
    data: item,
    redirect: redirect,
  };
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
    order: [["id", "desc"]],
  });
};

exports.saveContainer = saveContainer;
exports.addAsset = addAsset;
exports.removeAsset = removeAsset;
exports.addInvite = addInvite;
exports.removeInvite = removeInvite;
exports.findContainers = findContainers;
