const db = require("../models");
const dayjs = require("dayjs");
const Employee = db.employee;

const formattedEmployees = (employee) => {
  return {
    id: employee.id,
    fullName: employee.full_name,
    nip: employee.nip,
    email: employee.email,
    gender: employee.gender,
    address: employee.address,
    birthDate: dayjs(employee.birth_date).format("DD-MM-YYYY"),
    birthPlace: employee.birth_place,
    division: employee.division,
    totalLeave: employee.total_leave,
    leaveAvailable: employee.leave_available,
  };
};

exports.create = (req, res) => {
  req.body.birth_date = new Date(req.body.birth_date);

  Employee.create(req.body)
    .then((employee) => {
      res.status(201).json({
        status: 201,
        message: "Create data employee successfully",
        data: formattedEmployees(employee),
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to create employee data",
        error: err.message,
      });
    });
};

exports.findAll = (req, res) => {
  Employee.find()
    .then((employees) => {
      res.status(200).json({
        status: 200,
        message: "Successfully get all employee data",
        data: employees.map(formattedEmployees),
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to get employee data",
        error: err.message,
      });
    });
};

exports.findById = (req, res) => {
  const employeeId = req.params.id;

  Employee.findById(employeeId)
    .then((employee) => {
      if (!employee) {
        return res
          .status(404)
          .json({ status: 404, message: "Data employee not found" });
      }

      res.status(200).json({
        status: 200,
        message: "Successfully get employee data By Id",
        data: formattedEmployees(employee),
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to get employee data By Id",
        error: err.message,
      });
    });
};

exports.update = (req, res) => {
  const employeeId = req.params.id;

  req.body.birth_date = new Date(req.body.birth_date);

  Employee.findByIdAndUpdate(employeeId, req.body)
    .then((employee) => {
      if (!employee) {
        return res
          .status(404)
          .json({ status: 404, message: "Data employee not found" });
      }

      res.status(200).json({
        status: 200,
        message: "Successfully update employee data By Id",
        data: formattedEmployees(employee),
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to update employee data By Id",
        error: err.message,
      });
    });
};

exports.delete = (req, res) => {
  const employeeId = req.params.id;

  Employee.findByIdAndDelete(employeeId)
    .then((employee) => {
      if (!employee) {
        return res
          .status(404)
          .json({ status: 404, message: "Data employee not found" });
      }

      res.status(200).json({
        status: 200,
        message: "Successfully delete employee data By Id",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to delete employee data By Id",
        error: err.message,
      });
    });
};
