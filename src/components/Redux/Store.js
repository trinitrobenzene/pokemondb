import { configureStore } from '@reduxjs/toolkit';
import ListReducer from './Reducers/ListReducer';
import PokemonReducer from './Reducers/PokemonReducer';

const store = configureStore({
    reducer: {
        Pokemon: PokemonReducer,
        PokeDex: ListReducer
    },
});

export default store