import React from 'react';
import Relation from './Relation';

const Nature = () => {
    return (
        <div className="main-width bg-slate-50 p-8">
            <h1 className="title">Pokémon Natures</h1>
            <div className="alert-primary mt-4">
                Pokémon natures are another key feature of the games, introduced
                in Generation 3 (Ruby/Sapphire), which can increase certain
                stats. Each Pokémon has one nature, randomly selected from a
                total of 25.
            </div>
            <div className="md:flex gap-6">
                <div className="py-4 md:w-1/2">
                    <div>
                        <h3 className="sub-title">Pokémon Natures</h3>
                        <div className="mt-2 text-justify">
                            <p className="py-1">
                                Rather than just being a superficial
                                personality, Natures actually affect the growth
                                of a Pokémon. Each nature increases one of its
                                stats by 10% and decreases one by 10% (by the
                                time it reaches level 100). Five natures
                                increase and decrease the same stat and
                                therefore have no effect.
                            </p>
                            <p className="py-1">
                                In most cases it is preferable to have a nature
                                that decreases either Attack or Special Attack
                                for Pokémon whose strengths are the opposite
                                type of attack. Espeon, for example, favours
                                Special moves, so it's best to use a nature that
                                decreases its Attack since it won't be used.
                            </p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h3 className='sub-title'>Berries</h3>
                        <div>
                            <p className='py-1'>
                                A Pokémon's nature also determines the berries
                                it likes and dislikes. Each type of berry is
                                linked to one stat:
                            </p>
                            <ul className='pl-8 list-disc'>
                                <li>Attack - Spicy</li>
                                <li>Defense - Sour</li>
                                <li>Speed - Sweet</li>
                                <li>Sp. Attack - Dry</li>
                                <li>Sp. Defense - Bitter</li>
                            </ul>
                            <p className='py-1'>
                                The berry a Pokémon likes is the corresponding
                                flavour of its raised stat, while the berry it
                                dislikes is the flavour of its lowered stat.
                            </p>
                            <p className='py-1'>
                                For example, a Pokémon of Sassy nature will like
                                Bitter berries (Special Defense is raised) and
                                dislike Sweet berries (Speed is lowered).
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-4 md:w-1/2">
                    <h3 className="sub-title">Natures by stat</h3>
                    <div>
                        Find which nature corresponds to your preferred stat
                        boosts/drops.
                    </div>
                    <Relation />
                </div>
            </div>
        </div>
    );
};

export default Nature;
