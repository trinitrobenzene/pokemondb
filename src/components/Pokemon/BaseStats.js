import React, { useMemo } from 'react';
import { capitalFirstLetter, upperFirst } from '../Support';

const BaseStats = ({ stats }) => {
    const formatStat = (input) => {
        return capitalFirstLetter(input.replace('ecial', '. '));
    };

    const total = useMemo(() => {
        return stats.reduce((sum, stat) => sum + stat.base_stat, 0);
    }, [stats]);

    const style = (stat) => {
        let color = 'lime';
        if (stat < 55) color = 'tomato';
        else if (stat < 100) color = 'gold';
        else if (stat > 120) color = '#23cd5e';
        else if (stat > 150) color = '#00c2b8';

        return {
            '--percent': `${stat * 0.5}%`,
            '--color': `${color}`,
        };
    };

    const boundStats = (stat) => {
        let min, max;
        if (stat.stat.name === 'hp') {
            min = 2 * stat.base_stat + 110;
            max = 2 * stat.base_stat + 31 + 63 + 110;
        } else {
            min = Math.floor((2 * stat.base_stat + 5) * 0.9);
            max = Math.floor((2 * stat.base_stat + 31 + 63 + 5) * 1.1);
        }

        return { min, max };
    };

    return (
        <>
            <h3 className="font-bold mb-2">Base stats</h3>
            <table className="infor-table table-auto">
                <tbody className="text-sm">
                    {stats.map((stat, i) => (
                        <tr key={i} className="border-td p-2">
                            <td className="w-24 text-gray-500">
                                {formatStat(stat.stat.name)}
                            </td>
                            <td>{stat.base_stat}</td>
                            <td className="w-2/3">
                                <div
                                    className="rounded barchart"
                                    style={style(stat.base_stat)}
                                ></div>
                            </td>
                            <td className='pr-1'> {boundStats(stat).min} </td>
                            <td>{boundStats(stat).max}</td>
                        </tr>
                    ))}
                    <tr className="border-td p-2">
                        <td className="text-gray-500">Total</td>
                        <td className="font-bold">{total}</td>
                        <td></td>
                        <td className='pr-1 font-bold'>Min</td>
                        <td className='font-bold'>Max</td>
                    </tr>
                </tbody>
            </table>
            <p className="py-4 text-gray-500 text-sm text-justify">
                The ranges shown on the right are for a level 100 Pokémon.
                Maximum values are based on a beneficial nature, 252 EVs, 31
                IVs; minimum values are based on a hindering nature, 0 EVs, 0
                IVs.
            </p>
        </>
    );
};

export default BaseStats;
