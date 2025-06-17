const prismaClient = require("@prisma/client");

const prisma = new prismaClient.PrismaClient({
  log: ["errors", "query"],
});

module.exports = prisma;
