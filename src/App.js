import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {/* Home Page */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <TinderCards />
                                <SwipeButtons />
                            </>
                        }
                    />
                    {/* Profile */}
                    <Route
                        path="/profile"
                        element={
                            <>
                                <Header backButton="/" />
                                <h1>Profile Page</h1>
                            </>
                        }
                    />
                    {/* Chat */}
                    <Route
                        path="/chat"
                        element={
                            <>
                                <Header backButton="/" />
                                <Chats />
                            </>
                        }
                    />
                    {/* Chat Screen */}
                    <Route
                        path="/chat/:person"
                        element={
                            <>
                                <Header backButton="/chat" />
                                <ChatScreen />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
