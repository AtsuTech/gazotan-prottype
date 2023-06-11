import React from 'react';
import { NavLink } from 'react-router-dom';
function NavBar() {
    return (
        <div className="flex w-full h-20 bg-amber-400">
            <h1 className="text-4xl text-white w-3/5 font-light">
                <span className="text-white">Gazotan</span>
            </h1>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
        </div>
    );
}

export default NavBar;