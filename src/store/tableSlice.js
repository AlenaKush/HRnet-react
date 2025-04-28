import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entriesCount: 10,        // posts per page
  sortColumn: null,        // sort by column
  sortDirection: "asc",    // sorting direction
  currentPage: 1,          // current page
  searchTerm: "",          // search query
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setEntriesCount(state, action) {
      state.entriesCount = action.payload;
    },
    setSortColumn(state, action) {
      state.sortColumn = action.payload;
    },
    setSortDirection(state, action) {
      state.sortDirection = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setEntriesCount, setSortColumn, setSortDirection, setCurrentPage, setSearchTerm } = tableSlice.actions;
export default tableSlice.reducer;
