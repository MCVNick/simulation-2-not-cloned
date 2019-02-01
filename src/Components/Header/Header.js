import React from 'react'
import logo from './../../houser_logo.png'
import './Header.css'

function Header() {
    return (
        <nav className='headerParent'>
            <img className='logo' src={logo} alt='logo' />
            <div className='headerName'>Houser</div>
        </nav>
    )
}

export default Header