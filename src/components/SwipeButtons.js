import React from "react";
import "./SwipeButtons.css";
// Icons
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StartRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/material/IconButton";

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons-repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons-close">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons-StarRate">
                <StartRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons-Favorite">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons-Flash">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    );
}

export default SwipeButtons;
