module.exports = (app) => {
    const transaction = require("../controller/transaction.controller");
    const r = require("express").Router();
  
    r.get("/", transaction.findAll);
    r.get("/:id", transaction.findById);
    r.post("/", transaction.create);
    r.delete("/:id", transaction.delete);
  
    app.use("/transaction", r);
  };