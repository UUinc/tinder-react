import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@mui/material/Avatar";

function ChatScreen() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.suwalls.com%2Fwallpapers%2Ftv-shows%2Felliot-reid-scrubs-47204-1920x1080.jpg&f=1&nofb=1&ipt=6a2b05bb95aaabec482a278a03bbbcaf11d5001c38aa2ecce4f13a5a48744b4f&ipo=images",
            message: "Whats up",
        },
        {
            name: "Ellen",
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.suwalls.com%2Fwallpapers%2Ftv-shows%2Felliot-reid-scrubs-47204-1920x1080.jpg&f=1&nofb=1&ipt=6a2b05bb95aaabec482a278a03bbbcaf11d5001c38aa2ecce4f13a5a48744b4f&ipo=images",
            message: "Hows it going!",
        },
        {
            message: "fine you!",
        },
        {
            message: "ff",
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen-timestamp">
                YOU MATCHED WITH ELLEN ON 10/08/20
            </p>

            {messages.map((message) =>
                message.name ? (
                    <div className="chatScreen-message">
                        <Avatar
                            className="chatScreen-image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen-text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen-message">
                        <p className="chatScreen-textUser">{message.message}</p>
                    </div>
                )
            )}

            <form className="chatScreen-chatInput">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen-input"
                    placeholder="Type a message..."
                    type="text"
                />
                <button onClick={handleSend} className="chatScreen-send">
                    SEND
                </button>
            </form>
        </div>
    );
}

export default ChatScreen;
