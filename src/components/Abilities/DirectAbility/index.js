import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { capitalFirstLetter, upperFirst } from '../../Support';
import GameDecription from './GameDecription';
import PokemonsOwn from './PokemonsOwn';

const Content = ({ txt }) => {
    return (
        <p
            className="py-1"
            dangerouslySetInnerHTML={{ __html: txt.replaceAll('\n', '<br/>') }}
        ></p>
    );
};

const DirectAbility = () => {
    let { name } = useParams();
    const [ability, setAbility] = useState(null);

    const handleData = (data) => {
        return {
            name: data.name,
            id: data.id,
            pokemons: data.pokemon,
            effect: data.effect_entries.find((e) => e.language.name === 'en'),
            entries: data.flavor_text_entries.filter(
                (entry) => entry.language.name === 'en'
            ),
            changes: data.effect_changes,
        };
    };

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/ability/${name}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(d);
                return setAbility(handleData(data));
            });
    }, [name]);

    return (
        <div className="main-width p-8 bg-slate-50">
            {ability && (
                <>
                    <h1 className="title">
                        {capitalFirstLetter(ability.name)} (ability)
                    </h1>
                    <div className='py-4'>
                        <div className="mb-4 grid grid-cols-5 gap-6">
                            <div className="col-span-3">
                                <h3 className="sub-title">Effect</h3>
                                <div className="text-justify">
                                    <Content txt={ability.effect.effect} />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <GameDecription entries={ability.entries} />
                            </div>
                        </div>
                        <div>
                            <h3 className="sub-title">Pokémon with {capitalFirstLetter(ability.name)}</h3>
                            <PokemonsOwn pokemon={ability.pokemons}/>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default DirectAbility;
