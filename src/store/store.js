import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import { mockEmployees } from "../data/mockEmployees";

const preloadedState = {
  employees: {
    employees: mockEmployees,
    initialized: true,
  },
};

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
  preloadedState,
});


export default store;
