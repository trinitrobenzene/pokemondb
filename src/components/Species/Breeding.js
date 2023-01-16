import React from 'react';

export default function Breeding({ detail }) {
    return (
        <div className='w-1/2 lg:w-full'>
            {detail && (
                <>
                    <h3 className="font-bold mb-2">Breeding</h3>
                    <div className="py-4">
                        <table className="border-collapse border-td table-auto w-full">
                            <tbody>
                                <tr className="border-td p-2">
                                    <td className='text-right pr-4'>Egg cycles</td>
                                    <td>{detail.eggCycles}</td>
                                </tr>
                                <tr className="border-td p-2">
                                    <td className='text-right pr-4'>Gender</td>
                                    <td>
                                        {
                                            detail.genderRate > 0 ? (<>
                                                <span className='text-pink-400'>{detail.genderRate}% female,{' '}</span>
                                                <span className='text-blue-400'>{100 - detail.genderRate}% male</span>
                                            </>) : (<span>Genderless</span>)
                                        }
                                        
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
}
