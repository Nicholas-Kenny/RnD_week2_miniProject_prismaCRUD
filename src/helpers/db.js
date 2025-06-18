const prismaClient = require("@prisma/client");

const prisma = new prismaClient.PrismaClient({
  log: ["error", "query"],
});

module.exports = prisma;
