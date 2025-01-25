import React,{useState} from 'react';
import axios from 'axios';

const Register=()=>{
    const[username,setUsername]=useState('');
    const[username,setPassword]=useState('');


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:5000');
            alert(response.data.message)
        }catch(error){
            console.error('Error regsitering user:',error);
            alert(Registration failed)
        }
    }
    return(
        <form OnSubmit={handleSubmit}>
            <h2>Rgeister</h2>
            <input
               type="text"
               placholder="Username"
               value={username}
               onChange={(e)=>setUsername(e.target.value)}
               required
            />
            <input
               type="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
        </form>
    );
};
export default Register;