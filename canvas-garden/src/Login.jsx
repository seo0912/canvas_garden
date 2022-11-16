import React, { useState } from "react";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} type="email" placeholder="upi@aucklanduni.ac.nz" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={password} type="password" placeholder="******" id="password" name="password"/>
                <button type="submit"> Log In </button>
            </form>
            <button onClick={() => props.onFormSwitch('Register')}> Don't have an account? Register here. </button>
        
        </>
    )
}