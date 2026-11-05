import prisma from "../../lib/prisma.js";

const findAll = () => {
  return prisma.user.findMany();
};

const userRepository = {
  findAll,
};

export default userRepository;
