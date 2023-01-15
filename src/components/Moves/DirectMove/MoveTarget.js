import React from 'react';

const MoveTarget = ({ target }) => {
    const realTarget = () => {
        switch (target) {
            case 'selected-pokemon':
                return 'Ally/Foe';
            case 'ally':
                return 'Allu';
            case 'user':
                return 'User';
            default:
                return 'Foe';
        }
    };

    return (
        <>
            <h3 className="font-bold mb-2">Move target</h3>
            <p className='text-center'>{target && realTarget()}</p>
        </>
    );
};

export default MoveTarget;
