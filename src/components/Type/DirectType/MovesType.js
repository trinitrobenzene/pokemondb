import React from 'react';
import { TypeBtn } from '../Overview';
import { useSelector } from 'react-redux';

const MovesType = () => {
    const type = useSelector((state) => state.Type);
    const {moves, name} = type;

    return (
        <div className="py-8">
            <table className="w-full table-fixed">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Cat</th>
                        <th>Power</th>
                        <th>Acc</th>
                        <th>PP</th>
                        <th>TM</th>
                        <th>Effect</th>
                        <th>Prob.(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {moves && moves.map((move, i) => (
                        <tr key={i} className='py-2'>
                            <td className='py-1 border-td'>{move.name}</td>
                            <td className='py-1 border-td'>
                                <TypeBtn name={name} />
                            </td>
                            <td className='py-1 border-td'></td>
                            <td className='py-1 border-td'></td>
                            <td className='py-1 border-td'></td>
                            <td className='py-1 border-td'></td>
                            <td className='py-1 border-td'></td>
                            <td className='py-1 border-td'></td>
                            <td className='py-1 border-td'></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MovesType;
