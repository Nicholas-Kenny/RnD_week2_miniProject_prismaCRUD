const articleService = require("../service/article.service");
const Joi = require("joi");

const create = async (req, res) => {
  const scheme = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    author: Joi.string().required(),
  });

  try {
    await scheme.validateAsync(req.body);

    const article = await articleService.create(req.body);

    res.json(article);
  } catch (err) {
    res.json(err);
  }
};

const updateById = async (req, res) => {
  const scheme = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    author: Joi.string().required(),
    published: Joi.boolean().required()
  });

  try {
    await scheme.validateAsync(req.body);

    const article = await articleService.updateById(req.params.id, req.body);

    res.json(article);
  } catch (err) {
    res.json(err);
  }
};

const deleteById = async(req, res) => {
    const article = await articleService.deleteById(req.params.id);

    res.json(article);
}

const publishById = async (req, res) => {
  try {
    const article = await articleService.publishById(req.params.id);

    res.json(article);
  } catch (err) {
    res.json(err);
  }
};

const searchByTitle = async(req, res) => {
    const { title } = req.query;
    const article = await articleService.searchByTitle(title);
    
    res.json(article);
}

const findPublished = async(req, res) => {
    const article = await articleService.findPublished();

    res.json(article);
}

module.exports = {
  create,
  updateById,
  deleteById,
  publishById,
  searchByTitle,
  findPublished
};
