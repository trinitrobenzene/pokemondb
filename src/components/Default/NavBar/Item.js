import React from 'react';
import './style.css';
import { capitalFirstLetter } from '../../Support';
import { useSelector } from 'react-redux';

export default function Item({ props }) {
    const { name, icon } = props;
    const game = useSelector((state) => state.GameVersion);

    const style = 'text-sm rounded-md inline-block';
    return (
        <div className="text-center myItem md:relative">
            <div className='flex items-center text-white'>
                {icon}
                <span className={style}> {name} </span>
            </div>
            <div className="nav-sub">
                <div className="p-2 text-white">
                    {game && game.results && game.results.map((item, i) => {
                        return (
                            <p className='nav-items' key={i}>
                                {capitalFirstLetter(item.name)}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
