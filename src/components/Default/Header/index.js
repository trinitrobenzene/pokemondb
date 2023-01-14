import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
    return (
        <Link to="/">
            <header className="py-2 hover:cursor-pointer"></header>
        </Link>
    );
};

export default Header;
