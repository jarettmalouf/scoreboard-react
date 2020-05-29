const express = require("express");
const app = express();
app.use(express.json());
app.use(allowCrossOrigin);
const port = process.env.PORT || 5000;

const players = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
];

app.get("/", (req, res) => {
  res.json({ players });
});

app.get("/reset", (req, res) => {
  players.forEach((player) => (player.value = 0));
  res.json({ players });
});

app.get("/increment/:id", (req, res) => {
  players.forEach((player) =>
    player.id == req.params.id ? player.value++ : null
  );
  res.json({ players });
});

app.get("/decrement/:id", (req, res) => {
  players.forEach((player) =>
    player.id == req.params.id && player.value > 0 ? player.value-- : null
  );
  res.json({ players });
});

function allowCrossOrigin(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
}

app.listen(port, () => console.log(`Listening to port ${port}`));
