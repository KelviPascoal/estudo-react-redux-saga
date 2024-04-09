export enum ActionTypes {
  FETCH_REQUEST = "FETCH_REQUEST",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
}

export const fetchRequest = () => ({
  type: ActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: any) => ({
  type: ActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (error: any) => ({
  type: ActionTypes.FETCH_ERROR,
  payload: error,
});
