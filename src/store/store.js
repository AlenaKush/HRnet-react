import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import { mockEmployees } from "../data/mockEmployees";

const useMock = import.meta.env.VITE_USE_MOCK === "true";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
  ...(useMock && {
    preloadedState: {
      employees: {
        employees: mockEmployees,
        entriesCount: 10,
      },
    },
  }),
});

export default store;
