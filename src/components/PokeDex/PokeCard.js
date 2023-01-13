import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PokeCard.css';
import { upperFirst } from '../Support';

export default function PokeCard({ url }) {
    const [pokemon, setPokemon] = useState(null);
    const pokeIdTransfer = (id) => {
        if (id < 10) return `#00${id}`;
        else if (id < 100) return `#0${id}`;
        return `#${id}`;
    };

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) =>
                setPokemon({
                    name: data.name,
                    portrait: data.sprites.other['home'].front_default,
                    id: data.id,
                    types: data.types.map((_) => _.type.name),
                })
            );
    });
    return (
        <>
            {pokemon && (
                <div className="text-center">
                    <img alt="portrait" src={pokemon.portrait} />
                    <p>{pokeIdTransfer(pokemon.id)}</p>
                    <Link
                        className="font-bold hover:underline text-blue-600"
                        to={`/pokedex/${pokemon.name}`}
                    >
                        {upperFirst(pokemon.name)}
                    </Link>
                    <p className="upper-first-letter">
                        {pokemon.types.reduce((all, type) => (
                            <>{upperFirst(all)} • {upperFirst(type)}</>
                        ))}
                    </p>
                </div>
            )}
        </>
    );
}
