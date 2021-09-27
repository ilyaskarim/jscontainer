const randomstring = require("randomstring");
const { get } = require("lodash");

const saveContainer = async (container, database, user) => {
  let item;
  if (container.slug) {
    item = await database.models.container.findOne({
      where: {
        slug: container.slug,
      },
      attributes: ["slug", "id"],
    });
  }

  item = await database.models.container.create({
    is_private: get(container, "is_private", "") ? 1 : 0,
    html_snippet: get(container, "html_snippet", "") ? 1 : 0,
    title:
      get(container, "title", "") ||
      `Untitled container ${user ? user.name : ""}`,
    description: get(container, "description", ""),
    html: get(container, "html", ""),
    css: get(container, "css", ""),
    javascript: get(container, "javascript", ""),
    assets: get(container, "assets", ""),
    userId: user && user.id,
    forkedFrom: item && get(item, "slug", ""),
    slug: randomstring.generate({
      length: 14,
      charset: "asdfghzxc12345679ia89sda8d9ad89",
    }),
  });

  return {
    status: 200,
    message: "Container saved",
    data: item,
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
