import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import tableReducer from "./tableSlice";
import { mockEmployees } from "../data/mockEmployees";

const useMock = import.meta.env.VITE_USE_MOCK === "true";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    table: tableReducer,
  },
  ...(useMock && {
    preloadedState: {
      employees: {
        employees: mockEmployees,
      },
    },
  }),
});

export default store;
