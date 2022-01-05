//Package
import { Route, Routes } from 'react-router-dom';
// Files
import './App.css';
import HeaderPage from './Component/HeaderPage';
import Register from './Component/Register';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HeaderPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
