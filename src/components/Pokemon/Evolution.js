import React, { useEffect, useState } from 'react';
import { BaseCard } from './PokeCard';

const Travel = ({ piece }) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${piece.species.name}`;
    if (piece.evolves_to.length) {
        return (
            <>
                <BaseCard url={url} />
                <Travel piece={piece.evolves_to[0]} />
            </>
        );
    }
    return <BaseCard url={url} />;
};

const Evolution = ({ url }) => {
    const [chain, setChain] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => { setChain(data.chain)});
    }, [url]);

    return (
        <div>
            <h3 className="sub-title">Evolution chart</h3>
            <div className='md:flex justify-around'>
                {chain ? (
                    <Travel piece={chain} />
                ) : (
                    <p className="text-lg">This pokemon does not evolve.</p>
                )}
            </div>
        </div>
    );
};

export default Evolution;
