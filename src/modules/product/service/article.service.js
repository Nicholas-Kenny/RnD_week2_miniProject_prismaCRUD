const articleRepository = require("../repository/article.repository");

const create = async (data) => {
  return await articleRepository.create(data);
};

const updateById = async (id, data) => {
  return await articleRepository.updateById(parseInt(id), data);
};

const deleteById = async (id) => {
  return await articleRepository.deleteById(parseInt(id));
};

const publishById = async (id) => {
  return await articleRepository.updateById(parseInt(id),{
    published: true,
  });
};

const searchByTitle = async (title) => {
  return await articleRepository.searchByTitle(title);
};

const findPublished = async () => {
  return await articleRepository.findPublished();
};


module.exports = {
  create,
  updateById,
  deleteById,
  publishById,
  searchByTitle,
  findPublished
};