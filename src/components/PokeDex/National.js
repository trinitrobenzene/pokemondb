import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MediumCard } from '../Pokemon/PokeCard';
import { GET} from '../Redux/Action';

const National = () => {
    const [number, setNumber] = useState(48);
    const dispatch = useDispatch();
    const dex = useSelector(state => {
        return state.PokeDex;
    })

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=3000&offset=0')
            .then((res) => res.json())
            .then((data) => dispatch({type: GET, payload: data}));
    }, []);

    const getMore = () => {
        setNumber(number+48);
    };

    return (
        <div className="main-width bg-slate-50 p-8">
            <h1 className="title mb-8">Pokémon Pokédex</h1>
            <div className="alert-secondary mt-4">
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
                <div className="grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-8    ">
                    {dex.dex &&
                        dex.dex.slice(0, number)
                            .map((poke, i) => <MediumCard url={poke.url} key={i} />)
                    }
                </div>
                <div className='pt-8'>
                    <button onClick={getMore} className="btn self-center">
                        Load More...
                    </button>
                </div>
            </div>
        </div>
    );
};

export default National;
