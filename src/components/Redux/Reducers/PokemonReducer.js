import { SET_POKEMON } from "../Action";

const initialState = {
    pokemon: null,
    name: ''
}

const PokemonReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_POKEMON:
        // console.log(payload);
        return {
            ...state,
            pokemon: {
                name: payload.name[0].toUpperCase() + payload.name.slice(1),
                abilities: payload.abilities,
                id: payload.id,
                height: `${payload.height*0.1.toFixed(2)}`,
                weight: `${payload.weight*0.1.toFixed(2)} kg`,
                baseExp: payload.base_experience,
                picture: {
                    major: payload.sprites.other['official-artwork'].front_default,
                    more: [
                        payload.sprites.front_default,
                        payload.sprites.other['dream_world']['front_default'],
                        payload.sprites.other['home']['front_default']
                    ]
                },
                stats: payload.stats,
                species: payload.species.url,
                types: payload.types.map(type => {
                    return {
                        name: type.type.name[0].toUpperCase() + type.type.name.slice(1),
                        detail: type.type.url
                    }
                })
            }
        }
  
    default:
        return state;
  }
}

export default PokemonReducer;