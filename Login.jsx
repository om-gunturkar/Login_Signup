import React,{ useState } from "react";
import './style.css'
import {Link} from 'react-router-dom'
import {auth} from './firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

const Login=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(null);
        try{
            await signInWithEmailAndPassword(auth,email,password);
            console.log('Login Successful');
            setEmail('');
            setPassword('');
            
        }catch(err){
            console.log('Login Failed :',err.message);
            setError(err.message);
            
        }
    };
    return (
        <div className="signup_container">
            <form  className="signup-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}{}
                <label htmlFor="email">
                    Email:
                    <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="Password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </label>
                <button type="submit">Login</button>
                <p>Dont Have Account ? <Link to="./signup">Register</Link></p>
            </form>
        </div>
    )
}
export default Login;