import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SET_POKEMON } from '../Redux/Action';
import { GetDetail, Breeding, DexEntries, Training } from '../Species';
import { upperGen } from '../Support';
import { TypeLink } from '../Type/Overview';
import BaseStats from './BaseStats';
import Evolution from './Evolution';
import Quickview from './Quickview';
import './style.css';

export const TypeInline = ({ types }) => {
    return (
        <>
            {types.map((type, index) => (
                <span key={index}>
                    <TypeLink name={type.name} />
                    {index < types.length - 1 ? '/' : ''}
                </span>
            ))}
        </>
    );
};

const Introduce = ({ props }) => {
    let { pokemon, detail } = props;
    return (
        <p className="py-2">
            {pokemon.name} is a {<TypeInline types={pokemon.types} />} type
            Pokémon introduced in {upperGen(detail.generation.name)}. It is know
            as '{detail.genera.genus}
            '.
        </p>
    );
};

const Pokemon = () => {
    const { name } = useParams();
    const [detail, setDetail] = useState(null);
    const dispatch = useDispatch();
    const { pokemon } = useSelector((state) => {
        return state.Pokemon;
    });

    useLayoutEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                dispatch({ type: SET_POKEMON, payload: data });
            });
    }, [name, dispatch]);

    useLayoutEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
            .then((res) => res.json())
            .then((data) => setDetail(GetDetail(data)));
    }, [name]);

    return (
        <div className="main-width">
            <div className="bg-slate-50 p-8">
                <h2 className="text-center font-bold">
                    {pokemon ? pokemon.name : ''}
                </h2>
                {pokemon && detail && <Introduce props={{ pokemon, detail }} />}
                {pokemon && (
                    <>
                        <div className="lg:grid lg:grid-cols-4 gap-4">
                            <div className="col-span-3 py-4">
                                <div className="md:flex">
                                    <div className="flex justify-center">
                                        <img
                                            alt={name}
                                            src={pokemon.picture.major}
                                            className="w-4/5 md:w-3/5"
                                        />
                                    </div>
                                    <div className="grow px-4">
                                        <Quickview pokemon={pokemon} />
                                    </div>
                                </div>
                            </div>
                            <div className="py-4 flex gap-8 lg:block col-span-1">
                                <Training
                                    more={{ detail, baseExp: pokemon.baseExp }}
                                />
                                <Breeding detail={detail} />
                            </div>
                        </div>
                        <div className="py-4">
                            <BaseStats stats={pokemon.stats} />
                        </div>
                        <div className="py-4">
                            {detail && (
                                <Evolution url={detail.evolutionChain} />
                            )}
                        </div>
                        <DexEntries entries={detail ? detail.entries : []} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Pokemon;
