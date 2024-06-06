import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EmployeeService from "../../services/employeeService";

const employeeService = EmployeeService();

export const getAllEmployeeAction = createAsyncThunk(
  "employee/getAllEmployee",
  async () => {
    return await employeeService.getAllEmployee();
  }
);

export const deleteEmployeeAction = createAsyncThunk(
  "employee/deleteEmployee",
  async (payload) => {
    return await employeeService.deleteEmployee(payload);
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    employee: null,
    isLoading: false,
    message: "",
  },
  reducers: {
    selectedEmployee: (state, { payload }) => {
      state.employee = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllEmployeeAction.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getAllEmployeeAction.fulfilled, (state, { payload }) => {
        state.employees = payload;
        state.isLoading = false;
      }),
      builder.addCase(getAllEmployeeAction.rejected, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(deleteEmployeeAction.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(deleteEmployeeAction.fulfilled, (state, { payload }) => {
        state.employees = payload;
        state.isLoading = false;
      }),
      builder.addCase(deleteEmployeeAction.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { selectedEmployee } = employeeSlice.actions;

export default employeeSlice;
