import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook } from "../../../api/books";

export const bookFetchStart = createAsyncThunk(
  "book/fetchStart",
  async (data, { rejectWithValue }) => {
    try {
      const book = await getBook(data);
      return { data: book };
    } catch (error) {
      // console.log(error);
      return rejectWithValue(error);
    }
  }
);
