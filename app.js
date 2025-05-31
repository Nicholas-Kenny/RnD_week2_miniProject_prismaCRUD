const express = require("express");

const app = express();
const port = 8000;

app.use(express.json());

require("./src/routes/api")(app);

app.listen(port, () => {
    console.log(`running on port ${port}`);

});
