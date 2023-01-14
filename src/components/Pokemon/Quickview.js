import React from 'react';
import Abilities from './Abilities';

const Quickview = ({ pokemon }) => {
    return (
        <>
            <h3 className="font-bold mb-2">Pokédex data</h3>
            <table className="border-collapse border-td table-fixed w-full">
                <tbody>
                    <tr className='border-td p-2'>
                        <td className='text-center pr-4'>National No: </td>
                        <td>{pokemon.id} </td>
                    </tr>
                    <tr className='border-td p-2'>
                        <td className='text-center pr-4'>Type:</td>
                        <td>{pokemon.types.map((t) => t.name)}</td>
                    </tr>
                    <tr className='border-td p-2'>
                        <td className='text-center pr-4'>Height:</td>
                        <td>{pokemon.height.slice(0, 4)} m</td>
                    </tr>
                    <tr className='border-td p-2'>
                        <td className='text-center pr-4'> Weight:</td>
                        <td>{pokemon.weight.slice(0, 4)} kg</td>
                    </tr>
                    <tr className='border-td p-2'>
                        <td className='text-center pr-4'>Abilities: </td>
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
