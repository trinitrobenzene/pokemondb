import React from 'react';
import { capitalFirstLetter} from '../Support';

const Training = ({more}) => {
    let {detail, baseExp} = more;

    return (
        <div className='mb-4 w-1/2 lg:w-full'>
            <h3 className="sub-title">Training</h3>
            {detail && (
                <div className="pb-4">
                    <table className="infor-table table-auto">
                        <tbody>
                            <tr className="border-td p-2">
                                <td className='text-right pr-4 text-sm'>Catch rate</td>
                                <td>{detail.catchRate}</td>
                            </tr>
                            <tr className="border-td p-2">
                                <td className='text-right pr-4 text-sm'>Base Friendship</td>
                                <td>{detail.baseFriendship}</td>
                            </tr>
                            <tr className="border-td p-2">
                                <td className='text-right pr-4 text-sm'>Base Exp</td>
                                <td>{baseExp}</td>
                            </tr>
                            <tr className="border-td p-2">
                                <td className='text-right pr-4 text-sm'>Growth Rate</td>
                                <td>{capitalFirstLetter(detail.growthRate)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Training;
