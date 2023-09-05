import React, { useEffect } from "react";
import { useNavigate} from 'react-router-dom'

const Login =()=>{
    const [email,setEmail]= React.useState('')
    const [password,setPassword] = React.useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if(auth){
            navigate("/")
        }
    })
    const handleLogin = async () =>{
        console.log("email,password", email,password)
        let result = await fetch('http://localhost:3000/login',{
            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                'content-Type':'application/json'
            }
        });
        result = await result.json()
        console.warn(result)
        if(result.email){
             localStorage.setItem("user", (result) )
            //  JSON.stringify(result)
            navigate("/")
        }else{
            alert("please enter Valid data ")
        }
    }
        return(
        <div className="login">
            <h1>Login</h1>
            <input type="text" className="inputBox" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="password" className="inputBox" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button  onClick={handleLogin} className="appButton" type="button" >Login</button>

            {/* <h1>Login </h1> */}
        </div>
    )
}

export default Login