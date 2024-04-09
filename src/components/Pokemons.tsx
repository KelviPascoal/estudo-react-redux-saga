// components/Posts.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest, deletePokemon } from "../store/actions";
import { RootState } from "../store";

export type Pokemon = {
    name: string;
    url: string;
};

export function Pokemons() {
    const dispatch = useDispatch();
    const pokemons = useSelector((state: RootState) => state.pokemons);
    const loading = useSelector((state: RootState) => state.loading);
    const error = useSelector((state: RootState) => state.error);

    React.useEffect(() => {
        dispatch(fetchRequest());
    }, [dispatch]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
            }}
        >
            <h1>Pokemons</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {pokemons.map((pokemon: Pokemon) => (
                <div
                    key={pokemon.name}
                    style={{
                        background: "#654654",
                        borderRadius: 8,
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        padding: "0 16px",
                    }}
                >
                    <div>
                        <h3>{pokemon.name}</h3>
                        <p>{pokemon.url}</p>
                    </div>
                    <button onClick={() => dispatch(deletePokemon(pokemon.name))}>
                        x
                    </button>
                </div>
            ))}
        </div>
    );
}
