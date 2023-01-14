import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SET_POKEMON } from '../Redux/Action';
import Species, { GetDetail } from '../Species';
import Breeding from '../Species/Breeding';
import DexEntries from '../Species/DexEntries';
import Training from '../Species/Training';
import { upperGen } from '../Support';
import BaseStats from './BaseStats';
import Quickview from './Quickview';
import './style.css';

const Pokemon = () => {
    const { name } = useParams();
    const [detail, setDetail] = useState(null);
    const dispatch = useDispatch();
    const { pokemon } = useSelector((state) => {
        return state.Pokemon;
    });

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                dispatch({ type: SET_POKEMON, payload: data });
            });
    }, [name, dispatch]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
            .then((res) => res.json())
            .then((data) => setDetail(GetDetail(data)));
    }, [name]);

    const overview = () => {
        // detail && console.log(detail);
        let types = pokemon.types.map(type => type.name).join('/');
        let gen = detail ? upperGen(detail.generation.name) : ''
        let genus = detail ? detail.genera.genus : '' 
        return `${pokemon.name} is a ${types} type Pokémon introduced in ${gen}. It is know as '${genus}'.`
    }

    return (
        <div className="main-width">
            <div className="bg-slate-50 p-8">
                <h2 className="text-center font-bold">
                    {pokemon ? pokemon.name : ''}
                </h2>
                {pokemon && (
                    <>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-3 py-4">
                                {pokemon && overview()}
                                <div className="flex">
                                    <img
                                        alt={name}
                                        src={pokemon.picture.major}
                                        className="w-3/5"
                                    />
                                    <div className="grow p-4">
                                        <Quickview pokemon={pokemon} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 py-4">
                                <Training detail={detail} />
                                <Breeding detail={detail} />
                            </div>
                        </div>
                        <div className="grid grid-cols-3">
                            <div className="col-span-2">
                                <BaseStats stats={pokemon.stats} />
                            </div>
                        </div>
                        <DexEntries entries={detail ? detail.entries : []} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Pokemon;
