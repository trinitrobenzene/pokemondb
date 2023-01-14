import React from 'react';
import { upperFirst } from '../Support';

const Training = ({detail}) => {
    return (
        <div className='mb-4'>
            <h3 className="font-bold mb-2">Training</h3>
            {detail && (
                <div className="py-4">
                    <table className="border-collapse border-td table-fixed w-full">
                        <tbody>
                            <tr className="border-td p-2">
                                <td className='text-right pr-4'>Catch rate</td>
                                <td>{detail.catchRate}</td>
                            </tr>
                            <tr className="border-td p-2">
                                <td className='text-right pr-4'>Base Friendship</td>
                                <td>{detail.baseFriendship}</td>
                            </tr>
                            <tr className="border-td p-2">
                                <td className='text-right pr-4'>Base Exp</td>
                                <td>{'null'}</td>
                            </tr>
                            <tr className="border-td p-2">
                                <td className='text-right pr-4'>Growth Rate</td>
                                <td>{upperFirst(detail.growthRate)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Training;
