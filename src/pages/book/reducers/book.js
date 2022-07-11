import {
  BOOK_FETCH_IN_PROGRESS,
  BOOK_FETCH_SUCCESS,
  BOOK_FETCH_ERROR,
} from "../action-types/book";

const initialState = {
  data: {},
  error: null,
  loading: true,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_FETCH_IN_PROGRESS: {
      return { ...state, loading: true, error: null };
    }

    case BOOK_FETCH_SUCCESS: {
      const { data } = action.payload;
      return { ...state, data, loading: false };
    }

    case BOOK_FETCH_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default bookReducer;
