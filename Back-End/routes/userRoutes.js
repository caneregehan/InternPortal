import express from "express";
import {
  getAllUsers,
  getUserById,
  deleteUserById,
  addUser,
  updateUser,
  getUsername,
} from "../controllers/userController.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/:username", getUsername);
router.get("/", getAllUsers);
router.get("/:id", verifyToken, getUserById);
router.delete("/:id", verifyToken, deleteUserById);
router.post("/", addUser);
router.put("/:id", verifyToken, updateUser);

export default router;
