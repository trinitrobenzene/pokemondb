import { configureStore } from '@reduxjs/toolkit';
import GameVersion from './Reducers/GameVersion';
import ListReducer from './Reducers/ListReducer';
import MovesReducer from './Reducers/MovesReducer';
import PokemonReducer from './Reducers/PokemonReducer';
import TypeReducer from './Reducers/TypeReducer';

const store = configureStore({
    reducer: {
        Pokemon: PokemonReducer,
        PokeDex: ListReducer,
        Type: TypeReducer,
        GameVersion: GameVersion,
        Move: MovesReducer
    },
});

export default store