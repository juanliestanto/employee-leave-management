const db = require("../models");
const dayjs = require("dayjs");
const Transaction = db.transaction;
const Employee = db.employee;

exports.create = async (req, res) => {
  const { employeeId, leave_active } = req.body;

  console.log(employeeId);
  console.log(leave_active);

  if (!employeeId || !leave_active) {
    return res.status(400).json({
      status: 400,
      message: "Employee ID or leave_active is missing in request body",
    });
  }

  try {
    const session = await db.mongoose.startSession();
    session.startTransaction();

    const employee = await Employee.findById(employeeId).session(session);
    if (!employee) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({
        status: 404,
        message: "Employee not found",
      });
    }

    const transaction = await Transaction.create(
      [
        {
          ...req.body,
          employee: employeeId,
        },
      ],
      { session }
    );

    const updatedLeaveAvailable = employee.leave_available - leave_active;
    await Employee.findByIdAndUpdate(
      employeeId,
      { leave_available: updatedLeaveAvailable },
      { new: true }
    ).session(session);

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      status: 201,
      message: "Transaction created successfully and leave_available updated",
      data: transaction,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      error: err.message,
    });
  }
};

exports.findAll = (req, res) => {
  Transaction.find()
    .then((transactions) => {
      res.status(200).json({
        status: 200,
        message: "Successfully get all transaction data",
        data: transactions,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to get transaction data",
        error: err.message,
      });
    });
};

exports.findById = (req, res) => {
  const transactionId = req.params.id;

  Transaction.findById(transactionId)
    .then((transactions) => {
      if (!transactions) {
        return res
          .status(404)
          .json({ status: 404, message: "Data transaction not found" });
      }

      res.status(200).json({
        status: 200,
        message: "Successfully get transaction data By Id",
        data: transactions,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to get transaction data By Id",
        error: err.message,
      });
    });
};

exports.delete = (req, res) => {
  const transactionId = req.params.id;

  Transaction.findByIdAndDelete(transactionId)
    .then((transaction) => {
      if (!transaction) {
        return res
          .status(404)
          .json({ status: 404, message: "Data transaction not found" });
      }

      res.status(200).json({
        status: 200,
        message: "Successfully delete transaction data By Id",
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Failed to delete transaction data By Id",
        error: err.message,
      });
    });
};
