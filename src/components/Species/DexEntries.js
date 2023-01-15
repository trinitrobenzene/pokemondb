import React from 'react';
import { upperFirst } from '../Support';

const DexEntries = ({ entries }) => {
    return (
        <div>
            <h3 className="font-bold mb-2">DexEntries</h3>
            <div className='py-4'>
                <table className="infor-table table-auto">
                    <tbody>
                        {entries.map((entry, index) => {
                            return (
                                <tr className="border-td" key={index}>
                                    <td className="text-right pr-4 font-bold w-1/8">
                                        {upperFirst(entry.version.name)}
                                    </td>
                                    <td>{entry.flavor_text}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DexEntries;
