import React from 'react';
import { upperFirst } from '../Support';

const Abilities = ({abilities}) => {
    return (
        <div className="list-decimal pl-1 py-2">
            {abilities.map((a, index) => (
                <p key={a.slot} className={a.is_hidden?'text-xs text-orange-500':'text-blue-500'}>
                    {index+1}. {upperFirst(a.ability.name.replace('-', ' '))}
                    {a.is_hidden && ' (hidden ability)'}
                </p>
            ))}
        </div>
    );
};
export default Abilities;
