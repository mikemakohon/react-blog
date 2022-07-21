import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "../../../api/books";
import {
  bookCreateInProgressAction,
  bookCreateSuccessAction,
  bookCreateErrorAction,
  bookUpdateInProgressAction,
  bookUpdateSuccessAction,
  bookUpdateErrorAction,
  bookDeleteSuccessAction,
  bookDeleteErrorAction,
  bookDeleteInProgressAction,
} from "../reducers/bookList";

import { modalOpenToggleAction } from "../../../store/modal/reducer/modal";
import { toast } from "react-toastify";

const BOOK_LIST_FETCH_THUNK_TYPE = "BOOK_LIST_FETCH_THUNK_TYPE";

export const bookListFetch = createAsyncThunk(
  BOOK_LIST_FETCH_THUNK_TYPE,
  async (_, { rejectWithValue }) => {
    try {
      return await getBooks();
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

const BOOK_LIST_CREATE_THUNK_TYPE = "BOOK_LIST_CREATE_THUNK_TYPE";

export const bookItemCreate = createAsyncThunk(
  BOOK_LIST_CREATE_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      dispatch(bookCreateInProgressAction());
      await createBook(data);
      dispatch(bookCreateSuccessAction());
      dispatch(modalOpenToggleAction());
      await dispatch(bookListFetch());
      toast.success("Book was created");
    } catch (error) {
      dispatch(bookCreateErrorAction(error.data));
      toast.error("Something went wrong");
    }
  }
);

const BOOK_LIST_UPDATE_FETCH_DATA_THUNK_TYPE =
  "BOOK_LIST_UPDATE_FETCH_DATA_THUNK_TYPE";

export const bookItemUpdateDataFetch = createAsyncThunk(
  BOOK_LIST_UPDATE_FETCH_DATA_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      return await getBook(data.id);
    } catch (error) {
      dispatch(bookCreateErrorAction(error.data));
    }
  }
);

const BOOK_LIST_UPDATE_THUNK_TYPE = "BOOK_LIST_UPDATE_THUNK_TYPE";

export const bookItemUpdate = createAsyncThunk(
  BOOK_LIST_UPDATE_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      dispatch(bookUpdateInProgressAction());
      await updateBook(data, data.id);
      dispatch(bookUpdateSuccessAction());
      dispatch(modalOpenToggleAction());
      await dispatch(bookListFetch());
      toast.success("Book was updated");
    } catch (error) {
      dispatch(bookUpdateErrorAction(error.data));
      toast.error("Something went wrong");
    }
  }
);

const BOOK_LIST_DELETE_THUNK_TYPE = "BOOK_LIST_DELETE_THUNK_TYPE";

export const bookItemDelete = createAsyncThunk(
  BOOK_LIST_DELETE_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      dispatch(bookDeleteInProgressAction());
      await deleteBook(data._id);
      dispatch(bookDeleteSuccessAction());
      dispatch(modalOpenToggleAction());
      await dispatch(bookListFetch());
      toast.success("Book was deleted");
    } catch (error) {
      dispatch(bookDeleteErrorAction(error.data));
      toast.error("Something went wrong");
    }
  }
);
