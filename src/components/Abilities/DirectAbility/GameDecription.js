import React from 'react';
import { capitalFirstLetter } from '../../Support';

const GameDecription = ({entries}) => {
    return (
        <>
            <h3 className="sub-title">Game descriptions</h3>
            <div className="bounded-element">
                <table className="infor-table">
                    <tbody>
                        {entries.map((entry, i) => (
                            <tr className="border-td" key={i}>
                                <td className="font-black">
                                    {capitalFirstLetter(entry.version_group.name)}
                                </td>
                                <td>{entry.flavor_text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default GameDecription;
