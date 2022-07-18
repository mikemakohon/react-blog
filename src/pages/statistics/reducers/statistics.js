import { createSlice } from "@reduxjs/toolkit";
import { statisticsFetchStart } from "../thunks/statistics";

import * as actions from "../actions/statistics";

const initialState = {
  data: [],
  error: null,
  loading: true,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        statisticsFetchStart.pending,
        actions.statisticsFetchInProgressAction
      )
      .addCase(
        statisticsFetchStart.fulfilled,
        actions.statisticsFetchSuccessAction
      )
      .addCase(
        statisticsFetchStart.rejected,
        actions.statisticsFetchErrorAction
      );
  },
});

export default statisticsSlice.reducer;
