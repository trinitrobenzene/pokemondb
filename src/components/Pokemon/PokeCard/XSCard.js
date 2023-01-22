import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { capitalFirstLetter, pokeIdTransfer } from '../../Support';

export default function XSCard({ url }) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPokemon({
                    name: data.name,
                    portrait: data.sprites.front_default,
                    id: data.id,
                    abilities: data.abilities,
                });
            });
    }, [url]);
    return (
        <>
            {pokemon && (
                <div className="text-center b-4 md:mb-0 flex gap-8 border border-gray-200">
                    <Link
                        to={`/pokedex/${pokemon.name}`}
                        className="flex justify-center items-center w-1/6"
                    >
                        <img alt="portrait" src={pokemon.portrait} width="80" />
                    </Link>
                    <div className="flex items-center">
                        <div>
                            <p className="text-sm">
                                {pokeIdTransfer(pokemon.id, '#')}
                            </p>
                            <Link
                                className="font-bold hover:underline text-blue-600"
                                to={`/pokedex/${pokemon.name}`}
                            >
                                {capitalFirstLetter(pokemon.name)}
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center grow justify-end">
                        <table className="mt-2 w-2/3">
                            <tbody>
                                <tr className="text-sm">
                                    <td>1st</td>
                                    <td>2nd</td>
                                    <td>Hidden ability</td>
                                </tr>
                                <tr>
                                    {pokemon.abilities.map((abi, i) => (
                                        <td className="text-sm w-1/3" key={i}>
                                            <Link
                                                to={`/ability/${abi.ability.name}`}
                                                key={i}
                                                className="mr-2 text-blue-500 hover:underline"
                                            >
                                                {capitalFirstLetter(
                                                    abi.ability.name
                                                )}
                                            </Link>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}
