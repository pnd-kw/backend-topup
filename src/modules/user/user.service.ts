import userRepository from "./user.repository.js";

const getAllUsers = () => {
  return userRepository.findAll();
};

const userService = {
  getAllUsers,
};

export default userService;
