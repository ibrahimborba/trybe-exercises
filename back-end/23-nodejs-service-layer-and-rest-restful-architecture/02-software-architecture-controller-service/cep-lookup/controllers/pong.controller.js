const pong = (_req, res) => {
  res.status(200).json({ message: 'pong!' });
};

module.exports = { pong };
