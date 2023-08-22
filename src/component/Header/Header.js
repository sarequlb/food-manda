import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
            {/* <h1>Food <span className='header-text'> Manda</span></h1> */}
            </div>
            <div>
            <nav className='nav-bar'>
                <a href="">Home</a>
                <a href="">Sign in</a>
                <a href="">Log in</a>
                <a href="">About us</a>
            </nav>
            </div>
           
        </div>
    );
};

export default Header;