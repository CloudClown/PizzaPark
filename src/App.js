//Package
import { Route, Routes } from 'react-router-dom';
// Files
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './Component/SignUp';
import LogIn from './Component/LogIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
