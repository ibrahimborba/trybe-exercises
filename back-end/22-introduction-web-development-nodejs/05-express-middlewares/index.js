const express = require('express');

const app = express();
app.use(express.json());

app.post('/simpsons', async (req, res) => {
  const { productName, infos } = req.body;
  res.status(200).json({ productName, infos });
});

const PORT = 3000;
app.listen(PORT, () => { console.log(`Running on ${PORT}`); });
