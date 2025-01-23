import React,{ useState } from "react";
import './style.css'
import {Link} from 'react-router-dom'
import {auth} from './firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const SignUPform=()=>{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState(null);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(null);
        try{
            await createUserWithEmailAndPassword(auth,email,password);
            console.log('Account Created');
            setEmail('');
            setPassword('');
            
        }catch(err){
            console.log('Error :',err.message);
            setError(err.message);
            
        }
    };
    return (
        <div className="signup_container">
            <form  className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                {error && <p className="error-message">{error}</p>}{}
                <label htmlFor="email">
                    Email:
                    <input type="email" id="email" value={email} placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} required/>
                </label>
                <label htmlFor="password">
                    Password:
                    <input type="Password" id="password" value={password} placeholder="Enter your Email" onChange={(e)=>setPassword(e.target.value)} required/>
                </label>
                <button type="submit">Sign Up</button>
                <p>Already Registered ? <Link to="./login">Log In</Link></p>
            </form>
        </div>
    )
}
export default SignUPform;