const prismaClient = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new prismaClient.PrismaClient();

async function main() {
  try {
    const hashedPassword = await bcrypt.hash("admin@123", 10);

    await prisma.user.create({
      data: {
        name: "Admin",
        email: "tripi.tropi@gagak.com",
        password: hashedPassword,
        role: "ADMIN",
        dob: new Date("10 Januari 2000"),
      },
    });

    console.log("Database ready to go with admin user!");
  } catch (error) {
    console.error("Database initialization failed:", error);
  } finally {
    prisma.$disconnect();
  }
}

main();
