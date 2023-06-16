/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import './components/Example';
import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/home';

import Register from './components/auth_components/Register';
import RegisterComplete from './components/auth_components/RegisterComplete';
import Login from './components/auth_components/Login';

import ReactDOM from "react-dom/client";
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/register/complete" element={<RegisterComplete />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
);