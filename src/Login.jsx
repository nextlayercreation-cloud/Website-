import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Login({ setIsLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim() || !password) {
            setError('Please enter both username and password.');
            return;
        }
        setError('');
        if (username == "admin" && password == "admin") {
            // update shared login state in App
            if (typeof setIsLogin === 'function') setIsLogin(true);
            navigate("/");
        } else {
            setIsLogin(false);
            setError("Invalid Username or Password");
            return;
        }
    };

    return (
        <>
            <div className="login-page">
                <div className="login-card">
                    <div className="card-logo">
                        <div className="logo-round" aria-hidden={true}>
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <div>
                            <div className="card-title">Raj Paintings</div>
                            <div className="card-subtitle">Sign in to continue to your account</div>
                        </div>
                    </div>

                    {error && <div className="form-error" role="alert" aria-live="polite">{error}</div>}
                    <form onSubmit={handleSubmit} className="form" autoComplete="off" noValidate>
                        <div className="form-block">
                            <label className="form-label" htmlFor="login-username">Username</label>
                            <input
                                id="login-username"
                                className="form-input"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Your username Here"
                                autoComplete="username"
                            />
                        </div>
                        <div className="form-block">
                            <label className="form-label" htmlFor="login-password">Password</label>
                            <div className="password-wrapper">
                                <input
                                    id="login-password"
                                    className="form-input"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Your password Here"
                                    autoComplete="current-password"
                                />
                                <button
                                    type="button"
                                    className="toggle-pass"
                                    onClick={() => setShowPassword((p) => !p)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    title={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.95 10.95 0 0112 19c-5 0-9.27-3.11-11-7 1.17-3.64 4.6-6.42 8.44-6.96"/><path d="M1 1l22 22"/></svg>
                                    ) : (
                                        <svg aria-hidden={true} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="form-block">
                            <div style={{ marginTop: 12 }}>
                                <button className="btn-primary" type="submit">Log In</button>
                            </div>
                        </div>
                    </form>

                    <div className="divider" />
                    <center>
                        <div className="card-subtitle">Not Admin? No Need to Login.</div>
                        <div className="card-subtitle">You Can go home to Contact Us.</div>
                    </center>
                    <div className="signup"></div>
                    <div className="goToHome" style={{ marginTop: 20, textAlign:'center' }}>
                        <Link to="/" className="btn-primary" style={{ padding: '10px 18px', display: 'inline-block', textDecoration:'none' }}>Go back home</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;