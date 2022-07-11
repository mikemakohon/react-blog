import { all, fork } from "redux-saga/effects";

import * as bookSagas from "../../pages/Book/sagas";
import * as bookListSagas from "../../pages/Books/sagas";
import * as statisticsSagas from "../../pages/Statistics/sagas";

const combinedSagas = {
  ...bookSagas,
  ...bookListSagas,
  ...statisticsSagas,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
