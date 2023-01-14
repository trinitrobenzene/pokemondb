import React, { useMemo } from 'react';
import { upperFirst } from '../Support';

const BaseStats = ({ stats }) => {
    const formatStat = (input) => {
        return upperFirst(input.replace('ecial', '')).replace('-', '.');
    };

    const total = useMemo(() => {
        return stats.reduce((sum, stat) => sum + stat.base_stat, 0);
    }, [stats]);

    const style = (stat) => {
        // let percent = stat > 100 ? 100 : stat;
        let color = 'lime';
        if (stat < 55) color = 'tomato';
        else if (stat < 100) color = 'gold';
        else if (stat > 120) color = '#23cd5e';
        else if (stat > 150) color = '#00c2b8';

        return {
            '--percent': `${stat*0.5}%`,
            '--color': `${color}`,
        };
    };

    return (
        <>
            <h3 className="font-bold mb-2">Base stats</h3>
            <table className="border-collapse border-td table-auto w-full">
                <tbody className="text-sm">
                    {stats.map((stat, i) => (
                        <tr key={i} className="border-td p-2">
                            <td className="px-1 w-24 text-gray-500">
                                {formatStat(stat.stat.name)}
                            </td>
                            <td className="px-1">{stat.base_stat}</td>
                            <td className="px-1 w-2/3">
                                <div
                                    className="rounded barchart"
                                    style={style(stat.base_stat)}
                                ></div>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td className='text-gray-500'>Total</td>
                        <td className="font-bold">{total}</td>
                    </tr>
                </tbody>
            </table>
            <p className='py-4 text-gray-500 text-sm'>
                The ranges shown on the right are for a level 100 Pokémon.
                Maximum values are based on a beneficial nature, 252 EVs, 31
                IVs; minimum values are based on a hindering nature, 0 EVs, 0
                IVs.
            </p>
        </>
    );
};

export default BaseStats