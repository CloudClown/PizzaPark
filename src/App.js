//Package
import { Route, Routes } from 'react-router-dom';
// Files
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './Component/SignUp';
import SignIn from './Component/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
