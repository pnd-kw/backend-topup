import type { Request, Response } from "express";
import userService from "./user.service.js";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getAllUsers();

    res.json({
      success: true,
      data: users,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const userController = {
  getAllUsers,
};

export default userController;
