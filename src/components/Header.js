import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../ressources/logo.png";

// Icons
import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";

function Header({ backButton }) {
    const navigate = useNavigate();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => navigate(backButton)}>
                    <ArrowBackIosIcon
                        className="header-icon"
                        fontSize="large"
                    />
                </IconButton>
            ) : (
                <Link to="/profile">
                    <IconButton>
                        <PersonIcon className="header-icon" fontSize="large" />
                    </IconButton>
                </Link>
            )}

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
