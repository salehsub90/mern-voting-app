require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./models");
const errorHandler = require("./handlers");
const routes = require("./routes");

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

// app.get("/", (req, res, next) =>
//   res.json({
//     hello: "world",
//   })
// );

app.use("/api/auth", routes.auth);

app.use("/api/polls", routes.poll);

app.use(errorHandler.notFound);
app.use(errorHandler.errors);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
