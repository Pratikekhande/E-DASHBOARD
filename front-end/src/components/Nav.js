import React from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'


const Nav =()=>{
    const navigate = useNavigate()
    const auth = localStorage.getItem('user')
    const logout =()=>{
        localStorage.clear()
        navigate('/signup')
    }
    const person = JSON.stringify(auth).name
    return(
        <div>
            {auth ? 
            
            <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                {/* <li><Link to="/logout">Logout</Link></li> */}
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup"> Logout {(person)}</Link></li> 
               

            </ul>
            :
            <ul className='nav-ul nav-right'>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>

            </ul>
}
        </div>
    )
}

export default Nav;