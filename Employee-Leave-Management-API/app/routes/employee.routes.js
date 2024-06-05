module.exports = (app) => {
  const employee = require("../controller/employee.controller");
  const r = require("express").Router();

  r.get("/", employee.findAll);
  r.get("/:id", employee.findById);
  r.post("/", employee.create);
  r.put("/:id", employee.update);
  r.delete("/:id", employee.delete);

  app.use("/employee", r);
};
