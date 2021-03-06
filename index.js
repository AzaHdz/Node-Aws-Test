const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Welcome to my server! this is the port ${port}`);
});
app.get("/:name",(req, res) => {
  res.send(`Hello ${req.params.name}`)
});
app.listen(port, () => {
  console.log(`Example app listenig at http://localhost:${port}`);
});
