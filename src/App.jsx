import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  const isLoggedIn = !!localStorage.getItem('user');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
