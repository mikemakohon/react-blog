export const bookFetchSuccessAction = (state, action) => {
  const { data } = action.payload;
  state.data = data;
  state.loading = false;
};

export const bookFetchInProgressAction = (state) => {
  state.loading = true;
  state.error = null;
};

export const bookFetchErrorAction = (state) => {
  state.loading = false;
  state.error = true;
};
