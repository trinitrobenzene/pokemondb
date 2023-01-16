import React, { useEffect } from 'react';
import { TbPokeball, TbSettings } from 'react-icons/tb';
import { BsController } from 'react-icons/bs';
import { useDispatch} from 'react-redux';

import './style.css';
import Item from './Item';
import { SET_VERSION } from '../../Redux/Action';

const NavBar = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/version-group/')
            .then((res) => res.json())
            .then((data) => dispatch({ type: SET_VERSION, payload: data }));
    }, []);

    const itemList = [
        {
            name: 'Pokémon Data',
            icon: <TbPokeball className="w-1/4" />,
            childs: [],
        },
        {
            name: 'Game mechanics',
            icon: <BsController className="w-1/4" />,
            childs: [],
        },
        {
            name: 'Pokémon Games',
            icon: <TbSettings className="w-1/4" />,
            childs: []
        },
    ];

    return (
        <nav className="text-white bg-gray-600">
            <div className="main-width p-2 md:px-0 md:grid md:grid-cols-4">
                <ul className="grid grid-cols-3 items-center md:col-span-3 relative">
                    {itemList.map((item, i) => (
                        <li className="col-span-1" key={i}>
                            <Item props={item} />
                        </li>
                    ))}
                </ul>
                <div className="py-2 md:py-0 md:col-span-1">
                    <input
                        placeholder="Search"
                        className="rounded py-1 px-2 w-full"
                    />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
