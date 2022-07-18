import { createSlice } from "@reduxjs/toolkit";
import { bookFetchStart } from "../thunks/book";

import * as actions from "../actions/book";

const initialState = {
  data: {},
  error: null,
  loading: true,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookFetchStart.pending, actions.bookFetchInProgressAction)
      .addCase(bookFetchStart.fulfilled, actions.bookFetchSuccessAction)
      .addCase(bookFetchStart.rejected, actions.bookFetchErrorAction);
  },
});

export default bookSlice.reducer;
