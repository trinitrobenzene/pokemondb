import React from 'react';
import { upperFirst } from '../../Support';
import { TypeBtn } from '../../Type/Overview';

const MoveData = ({ move }) => {
    return (
        <>
            <h3 className="font-bold mb-2">Move data</h3>
            {move && (
                <table className="infor-table w-auto">
                    <tbody>
                        <tr className="border-td">
                            <td className='text-right'>Type</td>
                            <td>{<TypeBtn name={move.type} />}</td>
                        </tr>
                        <tr className="border-td">
                            <td className='text-right'>Category</td>
                            <td>{move.category}</td>
                        </tr>
                        <tr className="border-td">
                            <td className='text-right'>Power</td>
                            <td>{move.power}</td>
                        </tr>
                        <tr className="border-td">
                            <td className='text-right'>Accuracy</td>
                            <td>{move.acc}</td>
                        </tr>
                        <tr className="border-td">
                            <td className='text-right'>PP</td>
                            <td>{move.pp}</td>
                        </tr>
                        <tr className="border-td">
                            <td className='text-right'>Priority</td>
                            <td>{move.priority}</td>
                        </tr>
                        <tr className="border-td">
                            <td className='text-right'>Introduced</td>
                            <td>{upperFirst(move.generation)}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    );
};

export default MoveData;
