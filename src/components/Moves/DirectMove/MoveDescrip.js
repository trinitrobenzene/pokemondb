import React from 'react';
import { capitalFirstLetter } from '../../Support';

const MoveDescrip = ({ entries }) => {
    return (
        <div>
            <h3 className="font-bold mb-2">Game descriptions</h3>
            <table className="infor-table table-auto">
                <tbody>
                    {entries.map((entry, index) => (
                        <tr className="border-td" key={index}>
                            <td className='text-right font-bold pr-2'>{capitalFirstLetter(entry.versions)}</td>
                            <td>{entry.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MoveDescrip;
