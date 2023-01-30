import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { GET_TYPE } from '../../Redux/Action';
import { upperFirst } from '../../Support';
import MovesType from './MovesType';
import PokemonType from './PokemonType';
import RelationsType from './RelationsType';

const DirectType = () => {
    const [index, setIndex] = useState(0);
    const { name } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${name}`)
            .then((res) => res.json())
            .then((data) => dispatch({ type: GET_TYPE, payload: data }));
    }, [name, dispatch]);

    return (
        <div className="main-width bg-slate-50">
            <div className="p-8">
                <h1 className="title my-4">
                    {upperFirst(name) + ' '}
                    <Link to="/type" className="hover:underline opacity-80">
                        (type)
                    </Link>
                </h1>

                <ul className="text-sm font-medium text-center divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li className="w-full hover:cursor-pointer">
                        <span
                            className={index === 0 ? 'bg-indigo-100 tabs-items' : 'tabs-items'}
                            onClick={() => setIndex(0)}
                        >
                            Attack pros & cons
                        </span>
                    </li>
                    <li className="w-full hover:cursor-pointer">
                        <span
                            className={index === 1 ? 'bg-indigo-100 tabs-items' : 'tabs-items'}
                            aria-current={'page'}
                            onClick={() => setIndex(1)}
                        >
                            {upperFirst(name)} Pokémons
                        </span>
                    </li>
                    <li className="w-full hover:cursor-pointer">
                        <span
                            className={index === 2 ? 'bg-indigo-100 tabs-items' : 'tabs-items'}
                            onClick={() => setIndex(2)}
                        >
                            {upperFirst(name)} Moves
                        </span>
                    </li>
                </ul>

                <div className="alert-secondary my-4">
                    <p>
                        Grass is one of the three basic elemental types along
                        with Fire and Water, which constitute the three starter
                        Pokémon. This creates a simple triangle to explain the
                        type concept easily to new players.
                    </p>
                    <p>
                        Grass is one of the weakest types statistically, with 5
                        defensive weaknesses and 7 types that are resistant to
                        Grass moves. Furthermore, three type combos paired with
                        Grass have 7 weaknesses: Grass/Psychic, Grass/Ice, and
                        Grass/Dark.
                    </p>
                </div>

                <div className={index === 0 ? 'visible' : 'hidden'}>
                    <RelationsType />
                </div>
                <div className={index === 1 ? 'visible' : 'hidden'}>
                    <PokemonType />
                </div>
                <div className={index === 2 ? 'visible' : 'hidden'}>
                    <MovesType />
                </div>
            </div>
        </div>
    );
};

export default DirectType;
