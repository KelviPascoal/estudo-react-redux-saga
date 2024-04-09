import { ActionTypes } from "./actions";

interface Post {
  name: string;
  url: string;
}

interface State {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  posts: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case ActionTypes.FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.FETCH_SUCCESS:
      return { ...state, loading: false, posts: action.payload, error: null };
    case ActionTypes.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
