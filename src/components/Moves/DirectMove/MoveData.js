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
                            <td>Type</td>
                            <td>{<TypeBtn name={move.type} />}</td>
                        </tr>
                        <tr className="border-td">
                            <td>Category</td>
                            <td>{move.category}</td>
                        </tr>
                        <tr className="border-td">
                            <td>Power</td>
                            <td>{move.power}</td>
                        </tr>
                        <tr className="border-td">
                            <td>Accuracy</td>
                            <td>{move.acc}</td>
                        </tr>
                        <tr className="border-td">
                            <td>PP</td>
                            <td>{move.pp}</td>
                        </tr>
                        <tr className="border-td">
                            <td>Priority</td>
                            <td>{move.priority}</td>
                        </tr>
                        <tr className="border-td">
                            <td>Introduced</td>
                            <td>{upperFirst(move.generation)}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    );
};

export default MoveData;
