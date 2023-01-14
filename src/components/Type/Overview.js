import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { upperFirst } from '../Support';

const TypeColor = (name) => {
    switch (name) {
        case 'FIRE':
            return '#f42';

        case 'WATER':
            return '#39f';

        case 'GRASS':
            return 'limegreen';

        case 'ELECTRIC':
            return 'gold';

        case 'ICE':
            return '#a9e2ff';

        case 'FIGHTING':
            return '#b54';

        case 'POISON':
            return '#a59';

        case 'GROUND':
            return '#db5';

        case 'FLYING':
            return '#89f';

        case 'PSYCHIC':
            return '#f59';

        case 'BUG':
            return '#ab2';

        case 'ROCK':
            return '#ba6';

        case 'GHOST':
            return '#66b';

        case 'DRAGON':
            return 'navy';

        case 'DARK':
            return '#754';

        case 'STEEL':
            return '#aaa';

        case 'FAIRY':
            return '#e9e';

        default:
            return '#aa9';
    }
};

export const TypeLink = ({name}) => {
    return (
        <Link
            to={`/type/${name.toLowerCase()}`}
            className="hover:underline"
            style={{ color: TypeColor(name.toUpperCase()) }}
        >
            {upperFirst(name)}
        </Link>
    );
}

export const TypeBtn = ({name}) => {
    let NAME = name.toUpperCase();
    return (
        <Link
            to={`/type/${name.toLowerCase()}`}
            className="types-btn"
            style={{ backgroundColor: TypeColor(NAME) }}
        >
            {NAME}
        </Link>
    );
};

const Overview = () => {
    const [types, setTypes] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then((res) => res.json())
            .then((data) => setTypes(data));
    });

    return (
        <div className="main-width bg-slate-50">
            <div className="p-8">
                <h2 className="text-center font-bold">Pokémon types</h2>
                <div className="py-4 md:grid grid-cols-2 gap-6">
                    <div className="md:col-auto">
                        <h3 className="mb-2">Type quick-list</h3>
                        <div className='flex flex-wrap gap-1'>
                            {types &&
                                types.results.map(
                                    (type, index) =>
                                        index < 18 && (
                                            <TypeBtn name={type.name} key={index}/>
                                        )
                                )}
                        </div>
                    </div>
                    <div className="md:col-auto md:order-first">
                        <h3 className="mb-2 text-center md:text-left">
                            About Pokémon types
                        </h3>
                        <div className="text-justify">
                            <p className="py-1">
                                All Pokémon creatures and their moves are
                                assigned certain types. Each type has several
                                strengths and weaknesses in both attack and
                                defense. In battle, you should use Pokémon and
                                moves that have a type advantage over your
                                opponent; doing so will cause much more damage
                                than normal.
                            </p>
                            <p className="py-1">
                                A single-type advantage (for instance, a Water
                                attack against a Ground-type Pokémon) will net
                                you double normal damage. The advantages also
                                stack up, so a double-type advantage (for
                                instance a Water attack against a
                                Ground/Rock-type Pokémon) will net you quadruple
                                damage. In both these cases YOU will see the
                                message It's super effective! in-game after the
                                attack.
                            </p>
                            <p className="py-1">
                                Conversely, a single- and double-type
                                disadvantage will afflict half and a quarter
                                normal damage respectively. Here you will see
                                the message It's not very effective... in-game.
                            </p>
                            <p className="py-1">
                                Another advantage you can gain is Same Type
                                Attack Bonus (STAB). As the name implies, this
                                increases the power of the move if the attacking
                                Pokémon has the same type as the move used (for
                                example a Fire-type Pokémon using a Fire-type
                                move). In this case the damage is 1.5 times
                                normal. Again this is added to any other
                                advantages, so a Water-type Pokémon using a
                                Water-type move against a Ground/Rock-type
                                Pokémon will bag you six times (2×2×1.5) normal
                                damage!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
