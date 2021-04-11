const db = require("../models");

exports.showAllPolls = async (req, res, next) => {
  try {
    const polls = await db.Poll.find();
    res.status(200).json(polls);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.createPoll = async (req, res, next) => {
  try {
    console.log("reqqqq.boddy", req.body);
    const { question, options } = req.body;
    const poll = await db.Poll.create({
      question,
      options: options.map((option) => ({ option, votes: 0 })),
    });
    res.status(201).json(poll);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};