import React, { useState } from 'react';
import MoveQuickView from '../DirectMove/MoveQuickView';

const QuickView = ({ moves }) => {
    const [amount, setAmount] = useState(36);
    const increase = () => {
        if (amount < moves.length) setAmount(amount + 36);
    };
    return (
        <div className="rounded-lg">
            <table className="infor-table table-auto">
                <thead>
                    <tr className="bg-stone-200">
                        <th>Type</th>
                        <th>Name</th>
                        <th>Cat</th>
                        <th>Power</th>
                        <th>Acc</th>
                        <th>PP</th>
                        <th>Effect</th>
                    </tr>
                </thead>
                <tbody>
                    {moves ? (
                        moves.map(
                            (move, i) =>
                                i < amount && (
                                    <MoveQuickView info={move} key={i} />
                                )
                        )
                    ) : (
                        <MoveQuickView.Loading />
                    )}
                </tbody>
            </table>
            <button className={'btn self-center'} onClick={increase}>
                Load More
            </button>
        </div>
    );
};

export default QuickView;
