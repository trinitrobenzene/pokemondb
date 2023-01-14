import React from 'react';
import { TbPokeball, TbSettings } from 'react-icons/tb';
import { BsController } from 'react-icons/bs';
import './style.css';

const NavBar = () => {
    return (
        <nav className="text-white  bg-gray-600">
            <div className="main-width p-2 md:px-0 md:grid md:grid-cols-4">
                <ul className="grid grid-cols-3 items-center md:col-span-3">
                    <li className='col-span-1'>
                        <TbPokeball className="inline mr-2" />
                        <span>Pokémon Data</span>
                    </li>
                    <li className='col-span-1'>
                        <BsController className="inline mr-2" />
                        Game mechanics
                    </li>
                    <li className='col-span-1'>
                        <TbSettings className="inline mr-2" />
                        Pokémon Games
                    </li>
                </ul>
                <div className="py-2 md:py-0 md:col-span-1">
                    <input placeholder="Search" className="rounded py-1 px-2 w-full" />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
