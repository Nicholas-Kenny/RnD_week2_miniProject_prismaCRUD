const express = require("express");

const app = express();
const port = 8000;

app.use(express.json());

const auth = require("./src/routes/auth");

app.use("/auth", auth);
require("./src/routes/api")(app);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});
