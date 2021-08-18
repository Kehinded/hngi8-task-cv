import React from 'react'
import '../styles/Header.css'
import ZuriLogoImg from '../images/zuri-logo.svg'


const Header = () => {
    return (
        <div className= 'header'>
            <figure className="img-box"><a href="https://internship.zuri.team/" rel='noreferrer' target = '_blank'><img src={ZuriLogoImg} alt="" /></a></figure> 
        </div>
    )
}

export default Header
