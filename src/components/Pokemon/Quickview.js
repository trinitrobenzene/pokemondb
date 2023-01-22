import React from 'react';
import { pokeIdTransfer } from '../Support';
import { TypeBtn } from '../Type/Overview';
import Abilities from './Abilities';

const Quickview = ({ pokemon }) => {
    return (
        <>
            <h3 className="sub-title">Pokédex data</h3>
            <table className="infor-table table-auto">
                <tbody>
                    <tr className='border-td'>
                        <td className='text-right  pr-2 text-sm'>National No: </td>
                        <td className='font-bold '> {pokeIdTransfer(pokemon.id)} </td>
                    </tr>
                    <tr className='border-td'>
                        <td className='text-right  pr-2 text-sm'>Type:</td>
                        <td className=' flex gap-1'>{pokemon.types.map((t) => <TypeBtn name={t.name} key={t.name}/>)}</td>
                    </tr>
                    <tr className='border-td'>
                        <td className='text-right  pr-2 text-sm'>Height:</td>
                        <td>{pokemon.height.slice(0, 4)} m</td>
                    </tr>
                    <tr className='border-td'>
                        <td className='text-right  pr-2 text-sm'> Weight:</td>
                        <td>{pokemon.weight.slice(0, 4)} kg</td>
                    </tr>
                    <tr className='border-td'>
                        <td className='text-right  pr-2 text-sm'>Abilities: </td>
                        <td>
                            <Abilities abilities={pokemon.abilities}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Quickview;
