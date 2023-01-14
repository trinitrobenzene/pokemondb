import React from 'react';
import { useParams } from 'react-router-dom';
import DirectType from './DirectType/DirectType';
import Overview from './Overview';

const Type = () => {
    const {name} = useParams();
    return name ? <DirectType /> : <Overview />
};

export default Type;
