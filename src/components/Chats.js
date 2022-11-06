import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Angela"
                profilePic="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lensmen.ie%2Fwp-content%2Fuploads%2F2015%2F02%2FProfile-Portrait-Photographer-in-Dublin-Ireland..jpg&f=1&nofb=1&ipt=f2a6cf9aac9cf0eaadb966a9499724bffeb8d36b33e2c37e31bdb644e5560131&ipo=images"
                message="Yo whats up!"
                timestamp="40 seconds ago"
            />
            <Chat
                name="Mark"
                profilePic="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F105323124-1531311305098gettyimages-962142680.jpeg%3Fv%3D1571851562&f=1&nofb=1&ipt=5d5f2f5f8177dec00bc66b641e21ce91d58bc4f61e89d17e77e47139a1a81de6&ipo=images"
                message="New app intresing"
                timestamp="55 minutes ago"
            />
            <Chat
                name="Elliot"
                profilePic="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.suwalls.com%2Fwallpapers%2Ftv-shows%2Felliot-reid-scrubs-47204-1920x1080.jpg&f=1&nofb=1&ipt=6a2b05bb95aaabec482a278a03bbbcaf11d5001c38aa2ecce4f13a5a48744b4f&ipo=images"
                message="Ola!"
                timestamp="1 week ago"
            />
        </div>
    );
}

export default Chats;
