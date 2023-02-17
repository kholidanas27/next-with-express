import express from "express";

import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
