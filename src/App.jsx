import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import MachineControl from './pages/MachineControl.jsx';

function App() {
    return (
        <div className="vh-100 gradient-custom">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/control" element={<MachineControl />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
