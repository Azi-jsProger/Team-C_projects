import React from 'react';
import './style.css'
import logo from '../../assets/img/Logo.png'
import language from '../../assets/img/language.png'

const Header = () => {
    return (
             <div className='container'>
                 <div className="cont">


                    <div className='logo'>
                     <img src={logo} alt=""/>
                     <h1>жакшы жол</h1>
                 </div>
                     <nav>
                     <ul>
                         <li><a href='#'>Обо мне</a></li>
                         <li><a href='#'>Методическое пособие</a></li>
                         <li><a href='#'>Статьи</a></li>
                         <li><a href='#'>Тест</a></li>
                     </ul>
                 </nav>
                    <button className='language'><img src={language} alt=""/></button>
                 </div>
             </div>
    );
};

export default Header;