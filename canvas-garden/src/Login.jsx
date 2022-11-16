import React, { useState } from "react";
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label for="password">password</label>
            <input value={password} type="password" placeholder="******" id="password" name="password"/>
            <button type="submit"> Log In </button>
        </form>
    )
}