import { GET_TYPE } from "../Action";

const initialState = {
    name: '',
    pokemons: [],
    moves: [],
    generation: null,
    dameRelations: null
};

const TypeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TYPE:
            return {
                ...state,
                dameRelations: payload.damage_relations,
                name: payload.name,
                moves: payload.moves,
                pokemons: payload.pokemon.map(poke => poke.pokemon.url),
                generation: payload.generation
            }
    
        default:
            return state;
    }
};

export default TypeReducer;
