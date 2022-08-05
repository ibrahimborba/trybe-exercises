// const { app } = require('./app');
const { simpsons } = require('./simpsons');

const PORT = 3000;
simpsons.listen(PORT, () => { console.log(`Running on ${PORT}`); });
