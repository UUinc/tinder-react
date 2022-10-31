import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<TinderCards/>}/>
          <Route path='/profile' element={<h1>Profile Page</h1>}/>
          <Route path='/chat' element={<h1>Chat Page</h1>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;