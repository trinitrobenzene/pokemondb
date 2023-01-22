import React from 'react';
import { Link } from 'react-router-dom';
import { upperFirst } from '../Support';

const Abilities = ({ abilities }) => {
    return (
        <ol className="list-decimal pl-4 py-2">
            {abilities.map((a, index) => (
                <li key={a.slot}>
                    <Link
                        to={`/ability/${a.ability.name}`}
                        className={
                            a.is_hidden
                                ? 'text-xs text-blue-600 hover:underline'
                                : 'text-blue-600 hover:underline'
                        }
                    >
                        {upperFirst(a.ability.name.replace('-', ' '))}
                    </Link>
                    {a.is_hidden && (
                        <span className="text-xs"> (hidden ability)</span>
                    )}
                </li>
            ))}
        </ol>
    );
};
export default Abilities;
