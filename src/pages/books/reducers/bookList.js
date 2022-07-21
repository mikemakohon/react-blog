// import { createSlice } from "@reduxjs/toolkit";
// import { bookListFetchStart } from "../thunks/bookList";

// import * as actions from "../actions/bookList";

// const initialState = {
//   data: [],
//   error: null,
//   loading: true,
// };

// const bookListSlice = createSlice({
//   name: "bookList",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(
//         bookListFetchStart.pending,
//         actions.bookListFetchInProgressAction
//       )
//       .addCase(bookListFetchStart.fulfilled, actions.bookListFetchSuccessAction)
//       .addCase(bookListFetchStart.rejected, actions.bookListFetchErrorAction);
//   },
// });

// export default bookListSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { bookItemUpdateDataFetch, bookListFetch } from "../thunk/bookList";
import {
  bookCreateInProgress,
  bookCreateSuccess,
  bookCreateError,
  bookUpdateItemIdSet,
  bookUpdateInProgress,
  bookUpdateSuccess,
  bookUpdateError,
  bookDeleteItemDataSet,
  bookDeleteInProgress,
  bookDeleteSuccess,
  bookDeleteError,
} from "../actions/bookList";

const initialState = {
  loading: true,
  data: [],
  error: null,
  updateState: {
    loading: true,
    data: {},
    error: null,
  },
  createState: {
    loading: false,
    data: {},
    error: null,
  },
  deleteState: {
    loading: false,
    data: {},
    error: null,
  },
};

const name = "BOOK_LIST";

const bookListSlice = createSlice({
  name,
  initialState,
  reducers: {
    bookCreateInProgress,
    bookCreateSuccess,
    bookCreateError,
    bookUpdateInProgress,
    bookUpdateSuccess,
    bookUpdateError,
    bookUpdateItemIdSet,
    bookDeleteItemDataSet,
    bookDeleteInProgress,
    bookDeleteSuccess,
    bookDeleteError,
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookListFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookListFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(bookListFetch.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(bookItemUpdateDataFetch.pending, (state) => {
        state.updateState.loading = true;
        state.updateState.error = false;
      })
      .addCase(bookItemUpdateDataFetch.fulfilled, (state, action) => {
        state.updateState.loading = false;
        state.updateState.data = action.payload;
        state.updateState.error = false;
      })
      .addCase(bookItemUpdateDataFetch.rejected, (state) => {
        state.updateState.loading = false;
        state.updateState.error = true;
      });
  },
});
export const {
  bookCreateInProgress: bookCreateInProgressAction,
  bookCreateSuccess: bookCreateSuccessAction,
  bookCreateError: bookCreateErrorAction,
  bookUpdateItemIdSet: bookUpdateItemIdSetAction,
  bookUpdateInProgress: bookUpdateInProgressAction,
  bookUpdateSuccess: bookUpdateSuccessAction,
  bookUpdateError: bookUpdateErrorAction,
  bookDeleteItemDataSet: bookDeleteItemDataSetAction,
  bookDeleteInProgress: bookDeleteInProgressAction,
  bookDeleteSuccess: bookDeleteSuccessAction,
  bookDeleteError: bookDeleteErrorAction,
} = bookListSlice.actions;

export default bookListSlice.reducer;
