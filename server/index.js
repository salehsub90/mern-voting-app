require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./models");
const errorHandler = require("./handlers");
const routes = require("./routes");

const uuid = require("uuid");
const config = require("./config");
const polls = require("./polls");

const app = express();

//app.use(express.static("public"));
app.use(cors());

//app.use(bodyParser.json(), { useNewUrlParser: true });

app.get("/", (req, res, next) =>
  res.json({
    hello: "world",
  })
);
app.use("/api/polls", routes.poll);

// app.get("/polls", (req, res, next) => {
//   res.send(polls.get(req.token));
// });

// app.post("/polls", (req, res, next) => {
//   const { options, question } = req.body;
//   console.log("helloo, I am trying to post");

//   const createdPoll = {
//     id: uuid(),
//     options,
//     question,
//   };

//   if (options && question) {
//     res.send(polls.add(req.token, req.body));
//   } else {
//     res.status(403).send({
//       error: "Please provide both a name and an email address",
//     });
//   }
// });

app.use(errorHandler.notFound);
app.use(errorHandler.errors);

app.listen(config.port, () => {
  console.log("Server listening on port %s, Ctrl+C to stop", config.port);
});

module.exports = app;
