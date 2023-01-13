import React from 'react'
import {TbPokeball, TbSettings} from 'react-icons/tb'
import {BsController} from 'react-icons/bs'
import './style.css'

const NavBar = () => {
  return (
    <nav className='text-white  bg-gray-600'>
        <ul className='flex main-width justify-evenly items-center  py-2'>
            <li>
                <TbPokeball className='inline mr-2'/>
                <span>Pokémon Data</span>
            </li>
            <li>
                <BsController className='inline mr-2'/>
                Game mechanics
            </li>
            <li>
                <TbSettings className='inline mr-2'/>
                Pokémon Games
            </li>
            <li>
                <input placeholder='Search' className='rounded py-1 px-2'/>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar