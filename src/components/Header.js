import React from 'react';
import "./Header.css";
import logo from "../ressources/logo.png";

// Icons
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

function Header()
{
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon className="header-icon" fontSize="large"/>
            </IconButton>

            <img className='header-logo' src={logo} alt='emsi tinder logo'/>

            <IconButton>
                <ForumIcon className="header-icon" fontSize="large"/>
            </IconButton>
        </div>
    );
}

export default Header;