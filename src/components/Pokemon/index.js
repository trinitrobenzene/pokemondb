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
        <div className="py-2">
            {pokemon.name} is a {<TypeInline types={pokemon.types} />} type
            Pokémon introduced in {upperGen(detail.generation.name)}. It is know
            as '{detail.genera.genus}
            '.
        </div>
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
                <h1 className="title">
                    {pokemon ? pokemon.name : ''}
                </h1>
                {pokemon && detail && (
                    <>
                        <Introduce props={{ pokemon, detail }} />
                        <div className="lg:grid lg:grid-cols-3 gap-4">
                            <div className="col-span-2 py-4">
                                <div className="md:flex">
                                    <div className="px-6 w-3/5">
                                        <img
                                            alt={name}
                                            src={pokemon.picture.major}
                                        />
                                    </div>
                                    <div className="grow">
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
