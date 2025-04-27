import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  entriesCount: 10,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.employees.push(action.payload); 
    },
    setEntriesCount(state, action) { 
      state.entriesCount = action.payload; 
    },
  },
});


export const { addEmployee, setEntriesCount } = employeeSlice.actions;
export default employeeSlice.reducer;
