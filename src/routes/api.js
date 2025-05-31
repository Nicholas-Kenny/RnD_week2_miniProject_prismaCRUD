const article = require("../modules/product/controller/article.controller");

module.exports = async (app) => {
  app.post("/api/v1/articles", article.create);
  app.put("/api/v1/articles/:id", article.updateById);
  app.delete("/api/v1/articles/:id", article.deleteById);
  app.put("/api/v1/articles/:id/publish", article.publishById);
  app.get("/api/v1/articles/search", article.searchByTitle);
  app.get("/api/v1/articles", article.findPublished);
};
