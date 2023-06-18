import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './auth_components/Logout';

function NavBar() {

    const isAuthenticated = localStorage.getItem('auth_status');
    const user_name = localStorage.getItem('user_name');

    return (
        <div className="flex justify-between stiky top-0 z-50 flex w-full h-20 bg-amber-400 text-gray-300">
            <h1 className="flex text-white ml-2 font-light" role="APP名">
                <span className="text-4xl text-white">Gazotan:{isAuthenticated}</span>
                <ul className="flex">
                    <li className="m-2">
                        <NavLink to="/about" className="block w-20 h-12 mt-4 p-1 ml-2 text-center text-gray-600">
                            about
                        </NavLink>
                    </li>
                    <li className="m-2">
                        <NavLink to="/home" activeClassName="active" className="block w-20 h-12 mt-4 p-1 ml-2 text-center text-gray-600">
                            Home
                        </NavLink>
                    </li>
                    <li className="m-2">
                        <NavLink to="/mypage" activeClassName="active" className="block w-20 h-12 mt-4 p-1 ml-2 text-center text-gray-600">
                            MyPage
                        </NavLink>
                    </li>
                </ul>
            </h1>


            <div className="flex mr-2">
                { isAuthenticated == 200 ?
                    <>
                        <Logout />
                        <NavLink to="/mypage" activeClassName="active">
                            <button className="block w-20 h-12 mt-4 p-1 ml-2 text-center text-gray-600">{user_name}</button>
                        </NavLink>
                    </>
                :
                    <>
                        <NavLink to="/login" activeClassName="active">
                            <button className="block w-20 h-12 mt-4 p-1 ml-2 text-center text-gray-600">ログイン</button>
                        </NavLink>
                        <NavLink to="/register" activeClassName="active">
                            <button className="block w-20 h-12 mt-4 p-2 ml-2 text-center text-amber-400 bg-gray-600 border border-gray-600 rounded-xl">登録</button>
                        </NavLink>
                    </>
                }

            </div>
        </div>
    );
}

export default NavBar;