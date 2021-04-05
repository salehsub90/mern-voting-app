const router = require("express").Router();

const handle = require("../handlers/poll");

router.route("/").get(handle.showAllPolls).post(handle.createPoll);

module.exports = router;
