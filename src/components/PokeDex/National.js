import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET, GET_MORE } from '../Redux/Action';
import PokeCard from './PokeCard';

const National = () => {
    const dispatch = useDispatch();
    const dex = useSelector(state => {
        return state.PokeDex;
    })

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=36&offset=0')
            .then((res) => res.json())
            .then((data) => dispatch({type: GET, payload: data}));
    }, []);

    const getMore = () => {
        fetch(dex.next)
            .then((res) => res.json())
            .then((data) => {
                dispatch({type: GET_MORE, payload: data})
            });
    };

    return (
        <>
            <h2 className="text-center font-bold pb-8">Pokémon Pokédex</h2>
            <div className="alert-secondary">
                <p>
                    This is the complete National Pokédex for Generation 9,
                    which lists every one of the {dex.count} Pokémon discovered so far.
                </p>
                <p>
                    Click a Pokémon's name to see its detailed Pokédex page, or
                    click a type to see other pokemon of the same type.
                </p>
            </div>
            <div className="mt-8 pb-8 border-t border-gray-300">
                <div className="grid grid-cols-6 gap-6">
                    {dex.dex &&
                        dex.dex.map((poke, i) => (
                            <PokeCard url={poke.url} key={i} />
                        ))}
                </div>
                <div className='flex justify-center pt-8'>
                    <button onClick={getMore} className="rounded-md bg-indigo-200 p-2">
                        Load More...
                    </button>
                </div>
            </div>
        </>
    );
};

export default National;
