require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/vote");

const db = require("./models");

const polls = [
  {
    question: "what your best hobby",
    options: ["soccer", "snowboarding"],
  },
  {
    question: "what your best language",
    options: ["Arabic", "English"],
  },
  {
    question: "what your best course",
    options: ["Calculus", "History"],
  },
];

const seed = async () => {
  try {
    await db.Poll.remove();
    console.log("removed all polls");

    // await Promise.all(
    //   polls.map(async (poll) => {
    //     poll.options = poll.options.map((options) => ({ options, votes: 0 }));
    //     const data = await db.Poll.create(poll);
    //     await data.save();
    //   })
    // );
    // console.log("Polls created!!");
  } catch (err) {
    console.log(err);
  }
};

seed();
