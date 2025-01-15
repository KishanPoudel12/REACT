import express from "express";
import { getOneUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/", function (req, res) {
    res.status(200).json({ message: "Welcome to api!" });
});

router.get("/users/:id", getOneUser);

export default router;
