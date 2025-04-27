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
      state.employees.push(action.payload); //Adds a new employee
    },
    initEmployees(state, action) { 
      if (!state.initialized) {
        state.employees = action.payload; //Loads the initial data, but only if initialized is still false
        state.initialized = true;
      }
    },
  },
});


export const { addEmployee, initEmployees } = employeeSlice.actions;
export default employeeSlice.reducer;
