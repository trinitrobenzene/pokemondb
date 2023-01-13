import React from 'react';
import { upperFirst } from '../Support';

export const BaseStats = ({stats}) => {
    const formatStat = (input) => {

        return upperFirst(input.replace('ecial', '')).replace('-', '.')
    }
    return (
        <>
            <h3 className='font-bold mb-2'>Base stats</h3>
            <table className='border-collapse border-td table-fixed'>
                <tbody className='text-sm'>
                    {stats.map((stat, i) => (
                        <tr key={i} className='border-td p-2'>
                            <td>{formatStat(stat.stat.name)}</td>
                            <td className='px-1'>{stat.base_stat}</td>
                            <td className='w-full px-1'>
                                <div className='rounded barchart' style={{'--percent': `${stat.base_stat}%`}}></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
