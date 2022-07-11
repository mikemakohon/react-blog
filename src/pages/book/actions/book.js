import {
  BOOK_FETCH_ERROR,
  BOOK_FETCH_IN_PROGRESS,
  BOOK_FETCH_START,
  BOOK_FETCH_SUCCESS,
} from "../action-types/book";

export const bookFetchStart = (id) => ({
  type: BOOK_FETCH_START,
  payload: { id },
});

export const bookFetchInProgress = () => ({
  type: BOOK_FETCH_IN_PROGRESS,
});

export const bookFetchSuccess = (data) => ({
  type: BOOK_FETCH_SUCCESS,
  payload: { data },
});

export const bookFetchError = () => ({
  type: BOOK_FETCH_ERROR,
});
