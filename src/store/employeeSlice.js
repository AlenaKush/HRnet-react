import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  initialized: false, //flag to avoid reloading mock data.
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.employees.push(action.payload);
    },
    initEmployees(state, action) {
      if (!state.initialized) {
        state.employees = action.payload;
        state.initialized = true;
      }
    },
  },
});


export const { addEmployee, initEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
