const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello World !" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
