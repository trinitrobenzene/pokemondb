import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { capitalFirstLetter, upperFirst, upperGen } from '../../Support';
import MoveData from './MoveData';
import MoveDescrip from './MoveDescrip';
import MoveEffect from './MoveEffect';
import MoveTarget from './MoveTarget';

export const hanleData = (data) => {
    return {
        acc: data.accuracy ? `${data.accuracy}%` : '—',
        category: upperFirst(data.damage_class.name),
        id: data.id,
        pokemons: data.learned_by_pokemon.map((poke) => poke.url),
        generation: upperGen(data.generation.name),
        change: data.effect_chance,
        effect_entries:
            data.effect_entries.length === 0
                ? {
                      effect: 'Sorry, the data about this move is incomplete',
                      short: 'Incomplete data...',
                  }
                : {
                      effect: data.effect_entries[0].effect.replaceAll(
                          '$effect_chance',
                          data.effect_chance
                      ),
                      short: data.effect_entries[0].short_effect.replaceAll(
                          '$effect_chance',
                          data.effect_chance
                      ),
                  },
        entries: data.flavor_text_entries
            .filter((entry) => entry.language.name === 'en')
            .map((entry) => {
                return {
                    content: entry.flavor_text,
                    versions: entry.version_group.name,
                };
            }),
        meta: data.meta,
        name: data.name,
        power: data.power ?? '—',
        pp: data.pp,
        stat_changes: data.stat_changes,
        past_values: data.past_values,
        priority: data.priority > 0 ? `+${data.priority}` : data.priority,
        target: data.target.name,
        type: data.type.name,
    };
};

const DirectMove = () => {
    const { name } = useParams();
    const [move, setMove] = useState(null);
    /* const state = useSelector(state => state);
    console.log(state); */
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/move/${name}`)
            .then((res) => res.json())
            .then((data) => setMove(hanleData(data)));
    }, [name]);

    return (
        <div className="main-width bg-slate-50 p-8">
            <h1 className="title">{name && capitalFirstLetter(name)} (move)</h1>
            <div className="py-6 md:grid md:grid-cols-3 md:gap-8">
                <div className="col-span-1 mb-6 md:mb-0">
                    <MoveData move={move} />
                </div>
                <div className="col-span-2">
                    {move && <MoveEffect props={move} />}
                </div>
            </div>
            <div className="py-6 md:grid md:grid-cols-3 md:gap-8">
                <div className="col-span-1 mb-6 md:mb-0">
                    <MoveTarget target={move ? move.target : ''} />
                </div>
                <div className="col-span-2">
                    <MoveDescrip entries={move ? move.entries : []} />
                </div>
            </div>
        </div>
    );
};

export default DirectMove;
