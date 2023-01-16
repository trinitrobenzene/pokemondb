import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { hanleData } from '.';
import { capitalFirstLetter } from '../../Support';
import { TypeBtn } from '../../Type/Overview';

const MoveQuickView = ({ url }) => {
    const [info, setInfo] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setInfo(hanleData(data)));
    }, [url]);

    return (
        <>
            {info && (
                <tr className="border-td text-center">
                    <td>
                        <TypeBtn name={info.type} />
                    </td>
                    <td>
                        <Link to={`/move/${info.name}`} className='hover:underline text-blue-800'>
                            {capitalFirstLetter(info.name)}
                        </Link>
                    </td>
                    <td>{info.category}</td>
                    <td>{info.power}</td>
                    <td>{info.acc}</td>
                    <td className='px-2'>{info.pp}</td>
                    <td>{info.effect_entries.short}</td>
                </tr>
            )}
        </>
    );
};

export default MoveQuickView;
