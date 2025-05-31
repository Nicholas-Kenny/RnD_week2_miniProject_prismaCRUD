const db = require("../../../helpers/db");

const create = async (data) => {
  return await db.article.create({
    data: {
        ...data,
        published: false,
    }
  });
};

const updateById = async (id, data) => {
  return await db.article.update({
    where: {
      id,
    },
    data,
  });
};

const deleteById = async (id) => {
  return await db.article.delete({
    where: {
      id,
    },
  });
};

const searchByTitle = async (title) => {
  return await db.article.findMany({
    where: {
      published: true,
      title,
    },
  });
};

const findPublished = async () => {
  return await db.article.findMany({
    where: {
      published: true,
    },
  });
};

module.exports = {
  create,
  updateById,
  deleteById,
  searchByTitle,
  findPublished
};
