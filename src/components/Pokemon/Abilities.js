import React from 'react';
import { upperFirst } from '../Support';

const Abilities = ({abilities}) => {
    return (
        <div className="list-decimal pl-1 py-2">
            {abilities.map((a, index) => (
                <p key={a.slot} className={a.is_hidden?'text-xs text-blue-600':''}>
                    {index+1}. {upperFirst(a.ability.name.replace('-', ' '))}
                    {a.is_hidden && ' (hidden ability)'}
                </p>
            ))}
        </div>
    );
};
export default Abilities;
