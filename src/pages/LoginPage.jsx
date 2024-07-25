import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();  
        if (!email || !password) {
            alert("Please fill in both email and password.");
            return;
        }
        try {
            const response = await axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            });
            console.log('Success:', response.data);

            navigate("/control", { state: { userId: response.data.id } });
        } catch (error) {
            console.error('Login failed:', error);
            if (error.response) {

                console.log('HTTP error:', error.response.status);
                alert("Failed to login: " + error.response.data.message);
            } else {

                console.log('Network/CORS error:', error.message);
                alert("Network or CORS error: " + error.message);
            }
        }
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            textAlign: 'center',
        },
        formContainer: {
            background: 'white',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            width: '400px',
            textAlign: 'center'
        },
        formTitle: {
            marginBottom: '30px',
            color: '#333',
            fontWeight: 'bold',
            fontSize: '24px'
        },
        inputField: {
            width: 'calc(100% - 20px)',
            padding: '15px',
            marginBottom: '20px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
            transition: 'border-color 0.3s'
        },
        loginButton: {
            width: 'calc(100% - 20px)',
            padding: '15px 0',
            color: 'white',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '5px',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
        },
        loginButtonHover: {
            backgroundColor: '#0056b3'
        },
        registerLink: {
            display: 'block',
            marginTop: '20px',
            color: '#dc3545',
            textDecoration: 'none',
            fontSize: '16px',
            transition: 'color 0.3s'
        },
        registerLinkHover: {
            color: '#333333'
        }
    };

    return (
        <div style={styles.container}>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        {/* You can place an image here if needed */}
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={styles.formContainer}>
                        <form onSubmit={handleSubmit}>
                            <div className="d-flex flex-row align-items-center justify-content-center">
                                <p className="lead fw-normal mb-0 me-3" style={styles.formTitle}>Log Into Your Account</p>
                            </div>
                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="form3Example3"
                                    style={styles.inputField}
                                    placeholder="Enter a valid email address"
                                    required
                                />
                            </div>
                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="form3Example4"
                                    style={styles.inputField}
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                </div>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" style={styles.loginButton}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account? <a href="/register" style={styles.registerLink}>Register</a>
                                    <a href="/" style={styles.registerLink}>Return to Landing Page</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
