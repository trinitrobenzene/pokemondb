import React from 'react';

export default function Breeding({ detail }) {
    return (
        <div>
            {detail && (
                <>
                    <h3 className="font-bold mb-2">Breeding</h3>
                    <div className="py-4">
                        <table className="border-collapse border-td table-auto w-full">
                            <tbody>
                                <tr className="border-td p-2">
                                    <td className='text-right pr-4 text-sm'>Egg cycles</td>
                                    <td>{detail.eggCycles}</td>
                                </tr>
                                <tr className="border-td p-2">
                                    <td className='text-right pr-4 text-sm'>Gender</td>
                                    <td>
                                        <span className='text-pink-400'>{detail.genderRate}% female,{' '}</span>
                                        <span className='text-blue-400'>{100 - detail.genderRate}% male</span>
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
