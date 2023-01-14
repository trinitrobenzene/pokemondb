import React from 'react';
import Default from './Default';
import { useParams } from 'react-router-dom';
import National from './National';

const Pokedex = () => {
    let { page } = useParams();

    return page ? <National /> : <Default />;
};

export default Pokedex;
