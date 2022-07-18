import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks } from "../../../api/books";

export const statisticsFetchStart = createAsyncThunk(
  "statistics/fetchStart",
  async (data, { rejectWithValue }) => {
    try {
      const data = await getBooks();
      return { data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
