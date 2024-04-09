import { Pokemon } from "../components/Pokemons";

export enum ActionTypes {
  FETCH_REQUEST = "FETCH_REQUEST",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_ERROR = "FETCH_ERROR",
  DELETE_POKEMON = "DELETE_POKEMON",
}

export const fetchRequest = () => ({
  type: ActionTypes.FETCH_REQUEST,
});

export const fetchSuccess = (data: Pokemon) => ({
  type: ActionTypes.FETCH_SUCCESS,
  payload: data,
});

export const fetchError = (error: any) => ({
  type: ActionTypes.FETCH_ERROR,
  payload: error,
});

export const deletePokemon = (id: string) => ({
  type: ActionTypes.DELETE_POKEMON,
  payload: { id },
});