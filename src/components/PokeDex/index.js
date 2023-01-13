import React from 'react';
import Default from './Default';
import { useParams } from 'react-router-dom';
import National from './National';

const Pokedex = () => {
    let {page} = useParams();
    
    return (
        <div className="main-width">
            <div className='bg-slate-50 p-8'>
            {page ? <National /> : <Default />}
            </div>
        </div>
    );
};

export default Pokedex;
