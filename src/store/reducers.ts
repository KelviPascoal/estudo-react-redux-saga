import { Pokemon } from "../components/Pokemons";
import { ActionTypes } from "./actions";

interface State {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  pokemons: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.FETCH_SUCCESS:
      return { ...state, loading: false, pokemons: action.payload, error: null };
    case ActionTypes.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };

    ///////////////////////////////////////
    case ActionTypes.DELETE_POKEMON:
      console.log('action.payload: ', action.payload)
      const index = state.pokemons.findIndex(item => item.name === action.payload.id)
      const newList = state.pokemons
      newList.splice(index, 1)
      return { ...state, loading: false, error: false, pokemons: [...newList] };

    ///////////////////////////////////////

    default:
      return state;
  }
};

export default rootReducer;
