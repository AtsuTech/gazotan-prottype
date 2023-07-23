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
import Welcome from './components/welcome';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import MyPage from './components/MyPage';
import MyFlashCards from './components/MyFlashCards';
import CreateFlashCard from './components/CreateFlashCard';

import Register from './components/auth_components/Register';
import RegisterComplete from './components/auth_components/RegisterComplete';
import Login from './components/auth_components/Login';
import PasswordForgot from './components/auth_components/PasswordForgot';
import PasswordReset from './components/auth_components/PasswordReset';

//承認ユーザーのみアクセス可能
import AuthRequier from './components/auth_components/AuthRequier';

//ログイン後は表示したくないページの制御
import AuthNotAccess from './components/auth_components/AuthNotAccess';

import ReactDOM from "react-dom/client";
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <>
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="/register" element={<AuthNotAccess><Register /></AuthNotAccess>} />
                <Route path="/register/complete" element={<RegisterComplete />} />
                <Route path="/login" element={<AuthNotAccess><Login /></AuthNotAccess>} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/password/forgot" element={<PasswordForgot />} />
                <Route path="/password/reset" element={<PasswordReset />} />
                <Route path="/mypage" element={<AuthRequier><MyPage /></AuthRequier>} />
                <Route path="/myflashcards" element={<AuthRequier><MyFlashCards /></AuthRequier>} />
                <Route path="/flashcards/create" element={<AuthRequier><CreateFlashCard /></AuthRequier>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
);