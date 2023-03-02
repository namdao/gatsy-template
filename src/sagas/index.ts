import { all, fork, ForkEffect, AllEffect } from "redux-saga/effects";
// import servicesSaga from "services/servicesSaga";
import appSaga from "./appSagas";

export default function* rootSagas(): IterableIterator<
  AllEffect<ForkEffect<unknown>>
> {
  const listRootSaga: Array<any> = [];
  Object.values(appSaga).map((saga) => {
    return listRootSaga.push(saga);
  });
  yield all(listRootSaga.map((saga) => fork(saga)));
}
