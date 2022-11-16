import React, { useState } from "react";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Full Name </label>
                <input value={name} name="name" id="name" placeholder="Full Name"/>
                <label htmlFor="phone"> Phone Number </label>
                <input value={phone} name="phone" id="phone" placeholder="021 123 4567"/>
                <label htmlFor="email">email</label>
                <input value={email} type="email" placeholder="upi@aucklanduni.ac.nz" id="email" name="email"/>
                <label htmlFor="password">password</label>
                <input value={password} type="password" placeholder="******" id="password" name="password"/>
                <button type="submit"> Log In </button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}> Already have an account? Login here. </button>
        </>
    )
}