import express from "express";
import { auth, logout, getAuth, updateAvatar, editUser } from "../controllers/auth.controller.js";
import { checkUserAuth } from "../checkUserAuth.js";

const router = express.Router();
    
router.post("/auth", auth);
router.post("/logout", logout);
router.post("/updateAvatar", checkUserAuth, updateAvatar);
router.put("/editUser", checkUserAuth, editUser);
router.get("/getAuth", checkUserAuth, getAuth);

export default router;
