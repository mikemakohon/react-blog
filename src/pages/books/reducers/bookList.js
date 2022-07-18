import { createSlice } from "@reduxjs/toolkit";
import { bookListFetchStart } from "../thunks/bookList";

import * as actions from "../actions/bookList";

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const bookListSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        bookListFetchStart.pending,
        actions.bookListFetchInProgressAction
      )
      .addCase(bookListFetchStart.fulfilled, actions.bookListFetchSuccessAction)
      .addCase(bookListFetchStart.rejected, actions.bookListFetchErrorAction);
  },
});

export default bookListSlice.reducer;
