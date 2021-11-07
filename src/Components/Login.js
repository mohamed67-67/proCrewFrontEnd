import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../Redux/Auth/Actions'
import LockIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CustomizedSnackbars from './SnackBar';


const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const State = useSelector(state => state.AuthReducer)

    if (State?.data?.['authorized'] || localStorage.getItem('authorized') === 'true') {
        navigate('/')
    }

    const [user, setUser] = useState({
        email: '',
        password: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(user))
    }

    return (
        <div className='login'>
            <div className="form">
                <div className="lock">
                    <LockIcon />
                </div>
                <h3>Sign In</h3>
                <form onSubmit={handleSubmit}>
                    <TextField
                        onChange={e => setUser({ ...user, email: e.target.value })}
                        value={user.email}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        required
                        type='email'
                    />
                    <TextField
                        onChange={e => setUser({ ...user, password: e.target.value })}
                        value={user.password}
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        required
                        type='password'
                    />
                    <Button type='Submit' variant="contained">Sign In</Button>
                </form>
                <a href='/signup'>Don't have an account? Sign Up</a>
            </div>
            <CustomizedSnackbars promp={State?.data?.['error']} type='error' message={State?.data?.['error']} />
        </div>
    )
}

export default Login
