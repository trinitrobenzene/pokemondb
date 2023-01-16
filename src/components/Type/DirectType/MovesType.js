import React from 'react';
import { useSelector } from 'react-redux';
import QuickView from '../../Moves/AllMove/Quickview';

const MovesType = () => {
    const type = useSelector((state) => state.Type);
    const {moves} = type;

    return (
        <div className="py-8">
            <QuickView moves={moves.map(_=>_.url)}/>
        </div>
    );
};

export default MovesType;
