import React from 'react';
import './style.css';
import logo from '../../assets/img/Logo.png';
import language from '../../assets/img/language.png';
import { motion } from "framer-motion";

const Header = () => {
    return (
        <div className='container'>
            <div className="cont" id='idx'>
                <div className='logo'>
                    <img src={logo} alt=""/>
                    <a href="#idx">
                        <h1>жакшы жол</h1>
                    </a>
                </div>
                <nav>
                    <ul>
                        <li><a href='#'>Обо мне</a></li>
                        <li><a href='#'>Методическое пособие</a></li>
                        <li><a href='#'>Статьи</a></li>
                        <li><a href='#'>Тест</a></li>
                    </ul>
                </nav>
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className='language'>
                    <img src={language} alt=""/>
                </motion.button>
            </div>
        </div>
    );
};

export default Header;
