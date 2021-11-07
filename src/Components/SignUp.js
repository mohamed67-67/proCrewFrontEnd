import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../Redux/Auth/Actions'
import LockIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CustomizedSnackbars from './SnackBar';




const SignUp = () => {

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const [helperText, sethelperText] = useState('');

    const State = useSelector(state => state.AuthReducer);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if (State?.data?.['authorized'] || localStorage.getItem('authorized') === 'true') {
        navigate('/')
    }

    const handleSubmit = (e) => {
        if (newUser.password !== newUser.password_confirmation) {
            e.preventDefault()
            return sethelperText('Passwords do not match')
        }
        e.preventDefault()
        dispatch(signUp(newUser))
    }

    return (
        <div className='signup'>
            <div className="form">
                <div className="lock">
                    <LockIcon />
                </div>
                <h3>Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <TextField
                        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                        value={newUser.name}
                        id="standard-basic"
                        label="Name"
                        variant="standard"
                        type='text'
                        required
                    />
                    <TextField
                        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                        value={newUser.email}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        type='email'
                        required
                    />
                    <TextField
                        onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                        value={newUser.password}
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        required
                        type='password'
                    />
                    <TextField
                        onChange={e => setNewUser({ ...newUser, password_confirmation: e.target.value })}
                        value={newUser.password_confirmation}
                        id="standard-basic"
                        label="confirm Password"
                        variant="standard"
                        required
                        type='password'
                        helperText={helperText}
                    />
                    <Button type='Submit' variant="contained">Sign Up</Button>
                </form>
                <a href='/login'>Already have an account? Sign in</a>
            </div>
            <CustomizedSnackbars promp={State?.data?.['error']} type='error' message={State?.data?.['error']} />
        </div>
    )
}

export default SignUp
