import React from 'react';
import { Link } from 'react-router-dom';

const Moves = () => {
    
    return (
        <div className="main-width bg-slate-50 p-8">
            <h1 className="text-center font-bold">Pokémon Attackdex</h1>
            <div className="alert-secondary mt-4">
                <p className="py-1">
                    The attackdex section lists the available moves from the
                    Pokémon games. The power, accuracy and PP (power points) are
                    listed along with any additional effects.
                </p>
            </div>
            <div className="grid grid-cols-4 justify-around py-4 gap-8">
                <div className='col-span-1 alert-primary'>
                    <h3 className='sub-title'>Attackdex pages</h3>
                    <div>
                        Master list:{' '}
                        <Link to='/move/all' className='text-blue-500 hover:underline'>All Moves</Link>
                    </div>
                </div>
                <div className='alert-secondary col-span-3'>
                    <h3 className='sub-title'>About Pokémon moves</h3>
                    <p>
                        About Pokémon moves Pokémon battle using an array of up
                        to four moves. As with the pokemon themselves, each move
                        has a type and various stats, including base power,
                        accuracy and power points (PP - how many times the move
                        can be used). Moves fall under three categories.
                        Physical and Special moves are attacking moves that will
                        do damage to the opponent. Status moves, as the name
                        implies, change the status of a pokemon in some way -
                        for example raising or lowering either the attacker's or
                        opponent's stats, inflicting a burn or causing
                        confusion. In the early games, Physical attacks were any
                        moves of the types Normal, Fighting, Poison, Ground,
                        Flying, Bug, Rock, Ghost or Steel; Special attacks were
                        those having the Fire, Water, Electric, Grass, Ice,
                        Psychic, Dragon or Dark type. In Pokémon Diamond and
                        Pokémon Pearl, however, each attacking move is
                        categorised individually: moves of any type can be
                        Physical or Special. So now we have some Fighting moves
                        in the Special category, Psychic moves in the Physical
                        category and so on. This has led to much more
                        interesting and diverse movesets to take advantage of a
                        Pokémon's stat strengths.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Moves;
