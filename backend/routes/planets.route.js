import express from 'express';
import { getPlanets, getPlanetById, getPlanetsCount } from '../controllers/planets.controller.js';

const router = express.Router();

router.get("/get", getPlanets);
router.get("/count", getPlanetsCount);
router.get("/:id", getPlanetById);

export default router;