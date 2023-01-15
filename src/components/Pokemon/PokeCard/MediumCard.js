import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PokeCard.css';
import { pokeIdTransfer, upperFirst } from '../../Support';
import { TypeLink } from '../../Type/Overview';

export default function MediumCard({ url }) {
    const [pokemon, setPokemon] = useState(null);

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
    }, [url]);
    
    return (
        <>
            {pokemon && (
                <div className="flex flex-col justify-center">
                    <img alt="portrait" src={pokemon.portrait} />
                    <div className="text-center">
                        <p>{pokeIdTransfer(pokemon.id, '#')}</p>
                        <Link
                            className="font-bold hover:underline text-blue-600"
                            to={`/pokedex/${pokemon.name}`}
                        >
                            {upperFirst(pokemon.name)}
                        </Link>
                        <p className="upper-first-letter">
                            {pokemon.types.map((type, index) => (
                                <span key={index}>
                                    <TypeLink name={type} />
                                    {index < pokemon.types.length - 1 ? ' · ' : ''}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
