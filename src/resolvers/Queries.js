const { forwardTo } = require("prisma-binding");

const Queries = {
  users: forwardTo("db"),
  items: forwardTo("db"),
  transactions: forwardTo("db"),
  transfers: forwardTo("db")
};

module.exports = Queries;
