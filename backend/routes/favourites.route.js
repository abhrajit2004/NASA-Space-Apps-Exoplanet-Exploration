import express from "express";
import { getUserFavourites,  addFavourite,  deleteFavourite } from "../controllers/favourites.controller.js";

const router = express.Router();

router.get("/getFav", getUserFavourites);
router.post("/addFav", addFavourite);
router.delete("/delFav/:id", deleteFavourite);

export default router;
