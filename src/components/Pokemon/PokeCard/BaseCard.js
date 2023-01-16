import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { pokeIdTransfer, upperFirst } from '../../Support';
import { TypeLink } from '../../Type/Overview';

export default function BaseCard({ url }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
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
                <div className="text-center b-4 md:mb-0">
                    <div className='flex justify-center'>
                        <img alt="portrait" src={pokemon.portrait} className='w-4/5 md:w-3/5'/>
                    </div>
                    <div>
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
