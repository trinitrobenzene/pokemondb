import React from 'react';
import { pokeIdTransfer } from '../Support';
import { TypeBtn } from '../Type/Overview';
import Abilities from './Abilities';

const Quickview = ({ pokemon }) => {
    return (
        <>
            <h3 className="font-bold mb-2">Pokédex data</h3>
            <table className="border-collapse border-td table-auto w-full">
                <tbody>
                    <tr className='border-td p-2'>
                        <td className='text-right py-1 pr-2 text-sm'>National No: </td>
                        <td className='font-bold py-1'> {pokeIdTransfer(pokemon.id)} </td>
                    </tr>
                    <tr className='border-td p-2'>
                        <td className='text-right py-1 pr-2 text-sm'>Type:</td>
                        <td className='py-1 flex gap-1'>{pokemon.types.map((t) => <TypeBtn name={t.name} key={t.name}/>)}</td>
                    </tr>
                    <tr className='border-td p-2'>
                        <td className='text-right py-1 pr-2 text-sm'>Height:</td>
                        <td className='py-1'>{pokemon.height.slice(0, 4)} m</td>
                    </tr>
                    <tr className='border-td p-2'>
                        <td className='text-right py-1 pr-2 text-sm'> Weight:</td>
                        <td className='py-1'>{pokemon.weight.slice(0, 4)} kg</td>
                    </tr>
                    <tr className='border-td p-2'>
                        <td className='text-right py-1 pr-2 text-sm'>Abilities: </td>
                        <td className='py-1'>
                            <Abilities abilities={pokemon.abilities}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Quickview;
