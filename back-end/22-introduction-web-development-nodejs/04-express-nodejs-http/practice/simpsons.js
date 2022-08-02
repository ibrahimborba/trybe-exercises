const express = require('express');
const fs = require('fs').promises;

const simpsons = express();
simpsons.use(express.json());
const fileName = 'simpsons.json';

simpsons.get('/simpsons', async (_req, res) => {
  try {
    const characters = await fs.readFile(fileName, 'utf8');
    res.status(200).json(JSON.parse(characters));
  } catch (error) {
    res.status(500).json(error);
  }
});

simpsons.get('/simpsons/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const characters = await fs.readFile(fileName, 'utf8');
    const simpsonsList = JSON.parse(characters);
    const simpsonFound = simpsonsList.find((simpson) => simpson.id === id);

    if (!simpsonFound) res.status(404).json({ message: 'simpson not found' });
    res.status(200).json(simpsonFound);
  } catch (error) {
    res.status(500).json(error);
  }
});

simpsons.post('/simpsons', async (req, res) => {
  try {
    const { id, name } = req.body;
    const characters = await fs.readFile(fileName, 'utf8');
    const simpsonsList = JSON.parse(characters);
    const checkID = simpsonsList.some((simpson) => simpson.id === id);

    if (checkID) res.status(409).json({ message: 'id already exists' });

    simpsonsList.push({ id, name });
    await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsList));
    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = {
  simpsons,
};
