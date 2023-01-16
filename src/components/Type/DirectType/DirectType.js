import React, { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GET_TYPE } from '../../Redux/Action';
import { upperFirst } from '../../Support';
import MovesType from './MovesType';
import PokemonType from './PokemonType';

const DirectType = () => {
    const [index, setIndex] = useState(0);
    const { name } = useParams();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${name}`)
            .then((res) => res.json())
            .then((data) => dispatch({ type: GET_TYPE, payload: data }));
    }, [name, dispatch]);

    return (
        <div className="main-width bg-slate-50">
            <div className="p-8">
                <h2 className="text-center font-bold">
                    {upperFirst(name) + ' '}
                    <Link to="/type" className="hover:underline opacity-80">
                        (type)
                    </Link>
                </h2>
                <div className="alert-secondary mt-4">
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

                <ul className="text-sm font-medium text-center divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                    <li className="w-full">
                        <span
                            className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                            aria-current={'page'}
                            onClick={() => setIndex(0)}
                        >
                            {upperFirst(name)} Pokémons
                        </span>
                    </li>
                    <li className="w-full">
                        <span
                            className="inline-block w-full p-4  hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                            onClick={() => setIndex(1)}
                        >
                            {upperFirst(name)} Moves
                        </span>
                    </li>
                    <li className="w-full">
                        <span
                            className="inline-block w-full p-4  hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                            onClick={() => setIndex(2)}
                        >
                            Attack pros & cons
                        </span>
                    </li>
                </ul>
                <div className={index === 0 ? 'visible' : 'hidden'}>
                    <PokemonType />
                </div>
                <div className={index === 1 ? 'visible' : 'hidden'}>
                    <MovesType />{' '}
                </div>
            </div>
        </div>
    );
};

export default DirectType;
