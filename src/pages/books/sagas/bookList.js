// import { put, call, takeLatest } from "redux-saga/effects";
// import { getBooks } from "../../../api/books";
// import { BOOK_LIST_FETCH_START } from "../action-types/bookList";
// import {
//   bookListFetchError,
//   bookListFetchInProgress,
//   bookListFetchSuccess,
// } from "../actions/bookList";

// function* booksFetchSaga() {
//   try {
//     yield put(bookListFetchInProgress());
//     const data = yield call(getBooks);
//     yield put(bookListFetchSuccess(data));
//   } catch (error) {
//     yield put(bookListFetchError());
//   }
// }

// export function* bookListFetchWatcher() {
//   yield takeLatest(BOOK_LIST_FETCH_START, booksFetchSaga);
// }
