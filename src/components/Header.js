import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../ressources/logo.png";

// Icons
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";

function Header() {
    return (
        <div className="header">
            <Link to="/profile">
                <IconButton>
                    <PersonIcon className="header-icon" fontSize="large" />
                </IconButton>
            </Link>

            <Link to="/">
                <img
                    className="header-logo"
                    src={logo}
                    alt="emsi tinder logo"
                />
            </Link>

            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header-icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    );
}

export default Header;
