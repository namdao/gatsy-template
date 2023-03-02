import { ForkEffect, takeLatest } from "redux-saga/effects";
import { authActions } from "./slice";

function* login({ payload }: any) {
  console.log("aaaa");
}
function* watchAuthSaga(): IterableIterator<ForkEffect<unknown>> {
  yield takeLatest(authActions.increase, login);
}

export default watchAuthSaga;
