import express from 'express';
import { getPlanets, getPlanetById, getPlanetsCount } from '../controllers/planets.controller.js';

const router = express.Router();

router.use("/get", getPlanets);
router.use("/count", getPlanetsCount);
router.use("/:id", getPlanetById);

export default router;