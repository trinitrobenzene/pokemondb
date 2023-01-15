import React from 'react';
import { Link } from 'react-router-dom';

function Default() {
    return (
        <div className="main-width bg-slate-50 p-8">
            <h2 className="text-center font-bold pb-8">Pokémon Pokédex by Generation</h2>
            <div className="alert-secondary mt-4">
                <p>
                    The Pokédex section has a wealth of information on all the
                    Pokémon creatures from the entire game series. On the main
                    list pages you can see the various stats of each Pokémon.
                    Click a Pokémon's name to see a detailed page with Pokédex
                    data, descriptions from previous games, sprites, evolutions,
                    moves and more!
                </p>
            </div>
            <div className="block md:grid grid-cols-4 gap-8 py-8">
                <div className="alert-primary md:col-span-2 lg:col-span-1">
                    <h4 className="font-bold">
                        <Link to='/national' className='hover:underline text-blue-500'>All Pokémon (National Dex)</Link>
                    </h4>
                </div>
                <div className="poke-stats md:col-span-2 lg:col-span-3">
                    <h3 className="font-bold text-center my-4 md:text-left">About Pokémon stats</h3>
                    <div className="text-justify">
                        <p className="py-1">
                            Every Pokémon creature has an array of stats. HP
                            (Hit Points) is a Pokémon's life force. If your
                            Pokémon's HP hits zero, it faints and is no longer
                            usable in battle (it can still use Hidden Machines,
                            though). The Speed stat decides which Pokémon will
                            make the first move in battle. This stat can be
                            critical in long battles.
                        </p>
                        <p className="py-1">
                            Attack and Special Attack measure the strength of
                            moves used by your Pokémon; the higher this is, the
                            more damage you will do to opponents. Attack
                            corresponds to moves in the Physical category, while
                            Special Attack corresponds to Special moves.
                        </p>
                        <p className="py-1">
                            Similarly, Defense and Special Defense measure the
                            ability to take attacks from other Pokémon; the
                            higher the stat is, the fewer Hit Points will be
                            lost when attacked. Defense corresponds to moves in
                            the Physical category, while Special Defense
                            corresponds to Special moves.
                        </p>
                        <p className="py-1">
                            {' '}
                            Note: prior to Diamond/Pearl, the Physical and
                            Special categories related to Pokémon types, not the
                            individual moves.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Default;
