import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pokeIdTransfer, upperFirst } from '../../Support';
import { TypeLink } from '../../Type/Overview';

export default function BaseCard({ url }) {
    const [pokemon, setPokemon] = useState(null);

    useLayoutEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) =>
                setPokemon({
                    name: data.name,
                    portrait:
                        data.sprites.other['official-artwork'].front_default,
                    id: data.id,
                    types: data.types.map((_) => _.type.name),
                })
            );
    }, [url]);
    return (
        <>
            {pokemon && (
                <div className="mb-8 md:mb-0">
                    <Link to={`/pokedex/${pokemon.name}`}>
                        <img alt="portrait" src={pokemon.portrait} className='w-2/5 self-center'/>
                    </Link>
                    <div className='text-center'>
                        <Link
                            className="font-bold hover:underline text-blue-600"
                            to={`/pokedex/${pokemon.name}`}
                        >
                            {upperFirst(pokemon.name)}
                        </Link>
                        <div className="text-sm grow px-2">
                            <span className="upper-first-letter">
                                {pokemon.types.map((type, index) => (
                                    <span key={index}>
                                        <TypeLink name={type} />
                                        {index < pokemon.types.length - 1 ? ' · ' : ''}
                                    </span>
                                ))}
                            </span>
                            <p>{pokeIdTransfer(pokemon.id, '#')}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
