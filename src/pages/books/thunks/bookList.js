import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../../../api/books";

export const bookListFetchStart = createAsyncThunk(
  "bookList/fetchStart",
  async (data, { rejectWithValue }) => {
    try {
      const data = await getBooks();
      return { data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
