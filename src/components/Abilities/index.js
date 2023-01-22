import React from 'react';

const Abilities = () => {
    return (
        <div className="main-width p-8 bg-slate-50">
            <h1 className="title">Pokémon abilities</h1>
            <div className="alert-secondary mt-4">
                Each ability from the latest generation of Pokémon games is
                listed below, along with a short description and how many
                Pokémon can have that ability. Click an ability name to see the
                Pokémon that can learn it.
            </div>
            <div className="grid grid-cols-3 gap-6 py-4">
                <div className="col-span-1">
                    <h3 className="sub-title">About Pokémon abilities</h3>
                    <div className='text-justify'>
                        <p className='py-1'>
                            Abilities, introduced in Generation 3
                            (Ruby/Sapphire), are special attributes given to
                            each Pokémon that can aid them in battle. Many
                            abilities act as a "power-up" by increasing a move or
                            stat; others introduce a third-party effect like a
                            weather condition. Some abilities can even hinder a
                            Pokémon battle.
                        </p>
                        <p className='py-1'>
                            Each Pokémon can have only one ability, however,
                            some have the option of two different abilities. The
                            choice is random and each ability is equally likely.
                            There are 308 "single-ability" Pokémon and 355
                            "dual-ability" Pokémon.
                        </p>
                        <p className='py-1'>
                            In Pokémon Black & White, a third hidden ability was
                            introduced. The third ability is only available when
                            a Pokémon is returned from the <i>Dream World</i>, a new
                            online feature that is part of the Pokémon Global
                            Link. 568 Pokémon have a <i>Dream World</i> ability.
                        </p>
                    </div>
                </div>
                <div className='col-span-2'>
                    <h3 className='sub-title'>The ability list</h3>
                </div>
            </div>
        </div>
    );
};

export default Abilities;
