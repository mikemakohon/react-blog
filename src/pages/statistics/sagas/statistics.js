// import { put, call, takeLatest } from "redux-saga/effects";
// import { getBooks } from "../../../api/books";
// import {
//   statisticsFetchStart,
//   statisticsFetchError,
//   statisticsFetchInProgress,
//   statisticsFetchSuccess,
// } from "../reducers/statistics";

// function* statisticsFetchSaga() {
//   try {
//     yield put(statisticsFetchInProgress());
//     const data = yield call(getBooks);
//     yield put(statisticsFetchSuccess(data));
//   } catch (error) {
//     yield put(statisticsFetchError());
//   }
// }

// export function* statisticsFetchWatcher() {
//   yield takeLatest(statisticsFetchStart.type, statisticsFetchSaga);
// }
