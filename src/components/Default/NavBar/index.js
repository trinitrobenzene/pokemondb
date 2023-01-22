import React from 'react';
// import { useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';

import './style.css';
import { DataItem, MechanicsItem } from './Item';
// import { SET_VERSION } from '../../Redux/Action';

const NavBar = () => {
    /* const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/version-group/')
            .then((res) => res.json())
            .then((data) => dispatch({ type: SET_VERSION, payload: data }));
    }, []); */

    return (
        <nav className="bg-gray-600">
            <div className="main-width py-3 px-2 md:px-0 md:grid md:grid-cols-4 gap-2">
                <ul className="grid grid-cols-2 gap-2 items-center md:col-span-2 relative text-white">
                    <li>
                        <DataItem />
                    </li>
                    <li>
                        <MechanicsItem />
                    </li>
                    {/* <li>
                        <SettingItem />
                    </li> */}
                </ul>
                <div className="my-auto md:py-0 md:col-span-2 bg-stone-100 rounded flex">
                    <input
                        placeholder="Search..."
                        className="rounded py-1 px-2 bg-transparent w-5/6 focus:outline-none"
                    />
                    <div className="p-1 w-1/6 relative">
                        <BiSearch size={'28px'} className="text-gray-500 absolute right-px" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
