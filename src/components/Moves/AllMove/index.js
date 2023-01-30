import React, { useEffect, useState } from 'react';
import { upperFirst } from '../../Support';
import { AllTypes } from '../../Type';
import { hanleData } from '../DirectMove';
import QuickView from './Quickview';

const AllMoves = () => {
    const [moves, setMoves] = useState(null);
    const [sortByType, setSortByType] = useState('all')

    const handleData = async (results) => {
        const data = await Promise.all(results.map((url) => fetch(url)))
        .then((resp) => Promise.all(resp.map((r) => {
            return r.json()
        })))

        // console.log(data)
        console.clear()

        setMoves(data.map((move) => hanleData(move)));
    };

    const moveFilter = (e) => {
        setSortByType(e.target.value)
    };

    const allFilter = () => {
        if (sortByType !== 'all')
            return moves.filter(m => upperFirst(m.type) === sortByType)
        return moves;
    }

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/move/?offset=0&limit=2000')
            .then((res) => res.json())
            .then((data) => handleData(data.results.map(r => r.url)));
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
                    including which Pokémon can learn that move.
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
                        onChange={moveFilter}
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
            {<QuickView moves={allFilter()} />}
        </div>
    );
};

export default AllMoves;
