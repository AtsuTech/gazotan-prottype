import React from 'react';
import { NavLink } from 'react-router-dom';
function Footer() {
    return (
        <div className="w-full h-96 bg-amber-400">
            <h1 className="text-white w-3/5 font-light">
                <span className="text-white">2023</span>
            </h1>
            <NavLink to="/register" activeClassName="active">登録する</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
        </div>
    );
}

export default Footer;