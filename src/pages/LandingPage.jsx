import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    useEffect(() => {
        document.body.style.backgroundColor = '#f0f2f5';
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
    };

    const headingStyle = {
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
    };

    const buttonGroupStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
    };

    const buttonStyle = {
        textDecoration: 'none',
        padding: '10px 20px',
        color: 'white',
        backgroundColor: '#28a745',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
        margin: '0 40px',
    };

    return (
        <div style={containerStyle}>
            <div>
                <h1 style={headingStyle}>Roll-to-Roll Controling System @ HARRiS </h1>
                <div style={buttonGroupStyle}>
                    <Link to="/login" style={buttonStyle}>Login</Link>
                    <span> | </span>
                    <Link to="/register" style={buttonStyle}>Register</Link>
                </div>
            </div>
        </div>
    );
}
