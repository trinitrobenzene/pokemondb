import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSkeleton from '../../Loading';
import { capitalFirstLetter } from '../../Support';
import { TypeBtn } from '../../Type/Overview';

const MoveQuickView = ({ info }) => {
    return (
        <>
            {info && (
                <tr className="border-td text-center">
                    <td>
                        <TypeBtn name={info.type} />
                    </td>
                    <td>
                        <Link
                            to={`/move/${info.name}`}
                            className="hover:underline text-blue-800"
                        >
                            {capitalFirstLetter(info.name)}
                        </Link>
                    </td>
                    <td>{info.category}</td>
                    <td>{info.power}</td>
                    <td>{info.acc}</td>
                    <td className="px-2">{info.pp}</td>
                    <td className="text-sm">{info.effect_entries.short}</td>
                </tr>
            )}
        </>
    );
};

const Loading = () => {
    return (
        <tr className="border-td text-center">
            <td>
                <LoadingSkeleton className="w-full h-[28px] rounded-md" />
            </td>
            <td>
                <LoadingSkeleton className="w-full h-[28px] rounded-md" />
            </td>
            <td colSpan="4">
                <LoadingSkeleton className="w-full h-[28px] rounded-md" />
            </td>
            <td>
                <LoadingSkeleton className="w-full h-[28px] rounded-md" />
            </td>
        </tr>
    );
};

MoveQuickView.Loading = Loading;

export default MoveQuickView;
