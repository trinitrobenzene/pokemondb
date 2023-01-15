import React from 'react';
import { useParams } from 'react-router-dom';
import DirectType from './DirectType/DirectType';
import Overview from './Overview';

export const AllTypes = [
    'Normal',
    'Fire',
    'Water',
    'Grass',
    'Flying',
    'Fighting',
    'Poison',
    'Electric',
    'Ground',
    'Rock',
    'Psychic',
    'Ice',
    'Bug',
    'Ghost',
    'Steel',
    'Dragon',
    'Dark',
    'Fairy',
];

const Type = () => {
    const { name } = useParams();
    return name ? <DirectType /> : <Overview />;
};

export default Type;
