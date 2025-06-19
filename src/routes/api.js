const article = require("../modules/product/controller/article.controller");

const {
  accessValidation,
  authorization,
} = require("../middlewares/auth.middlewares");

module.exports = async (app) => {
  app.post(
    "/api/v1/articles",
    accessValidation,
    authorization("WRITER", "ADMIN"),
    article.create
  );
  app.put(
    "/api/v1/articles/:id",
    accessValidation,
    authorization("WRITER", "ADMIN"),
    article.updateById
  );
  app.delete(
    "/api/v1/articles/:id",
    accessValidation,
    authorization("WRITER", "ADMIN", "EDITOR"),
    article.deleteById
  );
  app.put(
    "/api/v1/articles/:id/publish",
    accessValidation,
    authorization("EDITOR"),
    article.publishById
  );
  app.get("/api/v1/articles/search", article.searchByTitle);
  app.get("/api/v1/articles", article.findPublished);
};
