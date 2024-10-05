import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export async function getPlanets(req, res) {
    try {
        const filePath = path.join(__dirname, '../new.json');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to read data' });
            }
            const planets = JSON.parse(data);
            res.json(planets);
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function getPlanetsCount(req, res) {
    try {
        const filePath = path.join(__dirname, '../new.json');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to read data' });
            }
            const planets = JSON.parse(data);
            res.json(planets.length);
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export async function getPlanetById(req, res) {
    try {
        const filePath = path.join(__dirname, '../new.json');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to read data' });
            }
            const planets = JSON.parse(data);
            const planetName = req.params.id.replace(/%20/g, ' '); // Replace %20 in the url with space
            const planet = planets.find(planet => planet.pl_name === planetName);
            if (!planet) {
                return res.status(404).json({ error: 'Planet not found' });
            }
            res.json(planet);
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
