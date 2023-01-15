import React from 'react';
import { useSelector } from 'react-redux';
import { SmallCard } from '../../Pokemon/PokeCard';
import { upperFirst } from '../../Support';

const PokemonType = () => {
    const type = useSelector((state) => state.Type);
    const { pokemons, name } = type;
    return (
        <div className="py-8">
            {type && (
                <>
                    <p className="mb-4">
                        There are {pokemons.length}{' '}
                        {name ? upperFirst(name) : ''}-type Pokémon.
                    </p>
                    <div className="flex flex-col items-center md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-4">
                        {pokemons.map((pUrl, index) =>
                            <SmallCard url={pUrl} key={index}/>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};
export default React.memo(PokemonType);
