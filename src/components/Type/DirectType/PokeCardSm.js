import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { pokeIdTransfer, upperFirst } from '../../Support';
import { TypeLink } from '../Overview';

export default function PokeCard({ url }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) =>
                setPokemon({
                    name: data.name,
                    portrait: data.sprites.front_default,
                    id: data.id,
                    types: data.types.map((_) => _.type.name),
                })
            );
    }, [url]);
    return (
        <>
            {pokemon && (
                <div className="text-center flex items-center grow">
                    <img alt="portrait" src={pokemon.portrait} />
                    <div>
                        <Link
                            className="font-bold hover:underline text-blue-600"
                            to={`/pokedex/${pokemon.name}`}
                        >
                            {upperFirst(pokemon.name)}
                        </Link>
                        <div className='text-xs grow px-2'>
                            <span>{pokeIdTransfer(pokemon.id, '#')}{" / "}</span>
                            <span className="upper-first-letter">
                                {pokemon.types.map((type, index) => 
                                    <span key={index}>
                                        <TypeLink name={type}/>
                                        {index < pokemon.types.length - 1 ? " · " : ""} 
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
