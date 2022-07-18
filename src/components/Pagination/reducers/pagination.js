import { createSlice } from "@reduxjs/toolkit";
import * as actions from "../actions/pagination";

const initialState = {
  currentPage: 1,
  itemsPerPage: 10,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    paginationChangePage: actions.paginationChangePageAction,
    paginationChangeItemsPerPage: actions.paginationChangeItemsPerPageAction,
  },
});

export const { paginationChangePage, paginationChangeItemsPerPage } =
  paginationSlice.actions;

export default paginationSlice.reducer;
