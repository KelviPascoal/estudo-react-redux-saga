import { all, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { ActionTypes, fetchSuccess, fetchError } from "./actions";

function* fetchData() {
  try {
    // @ts-ignore
    const response = yield call(
      axios.get,
      "https://pokeapi.co/api/v2/pokemon"
    );
    yield put(fetchSuccess(response.data.results));
  } catch (error) {
    yield put(fetchError(error));
  }
}

function* watchFetchRequest() {
  yield takeEvery(ActionTypes.FETCH_REQUEST, fetchData);
}

export default function* rootSaga() {
  yield all([watchFetchRequest()]);
}
