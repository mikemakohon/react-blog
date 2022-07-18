// import { put, call, takeLatest } from "redux-saga/effects";
// import { getBook } from "../../../api/books";
// import { BOOK_FETCH_START } from "../action-types/book";
// import {
//   bookFetchError,
//   bookFetchInProgress,
//   bookFetchSuccess,
// } from "../actions/book";

// function* bookFetchSaga({ payload: { id } }) {
//   try {
//     yield put(bookFetchInProgress());
//     const data = yield call(getBook, id);
//     yield put(bookFetchSuccess(data));
//   } catch (error) {
//     yield put(bookFetchError());
//   }
// }

// export function* bookFetchWatcher() {
//   yield takeLatest(BOOK_FETCH_START, bookFetchSaga);
// }
