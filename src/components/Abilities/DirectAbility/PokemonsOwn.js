import React from 'react';
// import { BaseCard } from '../../Pokemon/PokeCard';
import XSCard from '../../Pokemon/PokeCard/XSCard';

const PokemonsOwn = ({ pokemon }) => {
    return (
        <div>
            {pokemon.map((p) => (
                <XSCard url={p.pokemon.url} key={p.pokemon.name}/>
            ))}
        </div>
    );
};

export default PokemonsOwn;
