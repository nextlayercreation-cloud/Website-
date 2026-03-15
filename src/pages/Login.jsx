import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import {signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import { app } from './auth/api/Firebase';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const {setIsLogin,companyName}=useAuth();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.name;
        if (action === "logIn") {
            HandleLogin(e);
        }
        else if (action === "signUp") {
            HandleSignUp(e);
        }
        else if (action === "googleLogin") {
            handleGoogleLogin(e);
        }
    };

    const HandleLogin = async(e) => {
        try{
            if (!email.trim() || !password) {
                setError('Please enter both email and password.');
                return;
            }
            await signInWithEmailAndPassword(auth, email, password);
            setIsLogin(true);
            setError(""); 
            setEmail("");
            setPassword("");   
            alert("Welcome " + email + "!");       
            navigate("/");
        }
        catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('No account found with this Email Address.');
            } 
            else if (error.code === 'auth/wrong-password') {
                setError('Incorrect password.');
            }
            else if (error.code === 'auth/invalid-email') {
                setError('Invalid email address.');
            }
            else if(error.code === 'auth/too-many-requests') {
                setError('Too many failed login attempts. Please try again later.');
            }
            else if(error.code === 'auth/network-request-failed') {
                setError('Network error. Please check your connection and try again.');
            }
            else {
                setError('Login failed. Please try again.');
            }
            setIsLogin(false);
        }
    };

    const HandleSignUp=async (e)=>{
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            alert("Sign Up Successful!");
            setError("");
            setEmail("");
            setPassword("");
        }
        catch(error){
            console.log(error);
            if (error.code === 'auth/email-already-in-use') {
                setError('This email is already in use. Please use a different email.');
            }
            else if (error.code === 'auth/invalid-email') {
                setError('Invalid email address.');
            }
            else if (error.code === 'auth/weak-password') {
                setError('Please Pick a Strong Password.');
            }
            else{
                setError("Sign Up Failed ! Please try again later.");
            }
        }
    };

    const handleGoogleLogin = async (e) => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("User Info:", user);
        alert("Login Successful!");
        } 
        catch (error) {
            console.error("Error during Google Sign-in:", error.message);
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
                            <div className="card-title">{companyName}</div>
                            <div className="card-subtitle">Sign in to continue to your account</div>
                        </div>
                    </div>

                    {error && <div className="form-error" role="alert" aria-live="polite">{error}</div>}
                    <form  className="form" onSubmit={handleSubmit}>
                        <div className="form-block">
                            <label className="form-label" htmlFor="login-email">Email Address</label>
                            <input
                                id="login-email"
                                className="form-input"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="yourmail@example.com"
                                autoComplete="email"
                                required
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
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                    required
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
                                <button className="btn-primary" type="submit" name="logIn">Log In</button>
                                <button style={{marginTop:"15px"}} className="btn-primary" type="submit" name="signUp">Sign Up</button>
                                <button style={{marginTop:"15px"}} formNoValidate className="btn btn-primary" type="submit" name="googleLogin">Continue with Google</button>
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