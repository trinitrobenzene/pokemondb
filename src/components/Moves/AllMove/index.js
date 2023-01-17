import React, { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SET_MOVE } from '../../Redux/Action';
import { AllTypes } from '../../Type';
import QuickView from './Quickview';

// export const FilterContext = createContext();

const AllMoves = () => {
    /* const [sortByType, setSortByType] = useState('all');
    const value = {
        type: sortByType,
    }; */
    const moves = useSelector((state) => state.Move);
    const dispatch = useDispatch();

    const handleSortByType = (e) => {
        console.log(moves);
    };

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/move/?offset=0&limit=2000')
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: SET_MOVE, payload: data });
            });
    }, []);

    return (
        <div className="main-width bg-slate-50 p-8">
            <h1 className="text-center font-bold">Pokémon move list</h1>
            <div className="alert-secondary mt-4">
                <p className="py-1">
                    This is a full list of every Pokémon move from all 9
                    generations of the game series. The power, accuracy and PP
                    are listed along with any additional effects.
                </p>
                <p className="py-1">
                    Click a move name to see even more detailed information,
                    including which Pokémon can learn that move. You can click a
                    column heading to instantly sort by that column, or filter
                    on move name, type and category using the options provided.
                </p>
            </div>
            <div className="flex justify-around py-4">
                <div className="w-2/3">
                    <label htmlFor="move-name" className="mr-4">
                        Name
                    </label>
                    <input
                        name="move-name"
                        className="w-5/6 rounded border border-gray-300 p-1"
                    />
                </div>
                <div className="w-1/3">
                    <label htmlFor="move-type" className="mr-4">
                        Type
                    </label>
                    <select
                        name="move-type"
                        className="rounded border border-gray-300 p-1"
                        onChange={handleSortByType}
                    >
                        <option defaultValue value={'all'}>
                            All
                        </option>
                        {AllTypes.map((type) => (
                            <option value={type} key={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {moves && <QuickView moves={moves.list} />}
        </div>
    );
};

export default AllMoves;
