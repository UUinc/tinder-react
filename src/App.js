import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    {/* Home Page */}
                    <Route
                        path="/"
                        element={
                            <>
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
                                <h1>Profile Page</h1>
                            </>
                        }
                    />
                    {/* Chat */}
                    <Route
                        path="/chat"
                        element={
                            <>
                                <h1>Chat Page</h1>
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
