import { configureStore } from '@reduxjs/toolkit';
import ListReducer from './Reducers/ListReducer';
import PokemonReducer from './Reducers/PokemonReducer';
import TypeReducer from './Reducers/TypeReducer';

const store = configureStore({
    reducer: {
        Pokemon: PokemonReducer,
        PokeDex: ListReducer,
        Type: TypeReducer
    },
});

export default store