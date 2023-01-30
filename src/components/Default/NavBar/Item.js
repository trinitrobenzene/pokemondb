import React from 'react';
import './style.css';
import { capitalFirstLetter } from '../../Support';
import { useSelector } from 'react-redux';
import { TbPokeball, TbSettings } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export function SettingItem() {
    const game = useSelector((state) => state.GameVersion);

    return (
        <div className="text-center myItem md:relative">
            <div className="flex items-center text-white">
                <TbSettings className="w-1/4" />
                <span className='text-sm rounded-md inline-block'> Pokémon Games </span>
            </div>
            <div className="nav-sub">
                <div className="p-2 text-white">
                    {game &&
                        game.results &&
                        game.results.map((item, i) => {
                            return (
                                <p className="nav-items" key={i}>
                                    {capitalFirstLetter(item.name)}
                                </p>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export const DataItem = () => {
    return (
        <div className="text-center myItem md:relative">
            <div className="flex items-center text-white">
                <TbPokeball className="w-1/4" />
                <span className='text-sm rounded-md inline-block'>Pokémon Data</span>
            </div>
            <div className="nav-sub">
                <div className="p-2 text-white">
                    <Link to="/national" className="nav-items">
                        Pokédex
                    </Link>
                    <Link to="/move" className="nav-items">
                        Move
                    </Link>
                    <Link to="/type" className="nav-items">
                        Type
                    </Link>
                </div>
            </div>
        </div>
    );
};

export const MechanicsItem = () => {
    return (
        <div className="text-center myItem md:relative">
            <div className="flex items-center text-white">
                <TbPokeball className="w-1/4" />
                <span className='text-sm rounded-md inline-block'>
                    Game Mechanics
                </span>
            </div>
            <div className="nav-sub">
                <div className="p-2 text-white">
                    <Link to='/nature' className="nav-items">Natures</Link>
                    {/* <Link to='/ability' className="nav-items">Abilities</Link>                     */}
                </div>
            </div>
        </div>
    );
}
