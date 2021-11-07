import React from 'react'
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../Redux/Auth/Actions';

const Nav = () => {

    const dispatch = useDispatch()
    const State = useSelector(state => state.AuthReducer)

    const handleLogOut = () => {
        dispatch(logOut())
        window.location.reload()
    }



    return (
        <div className='navbar'>
            <div className="content">

                <Link to='/'>
                    <div className="logo">
                        <img src="https://www.procrew.pro/wp-content/uploads/2018/12/logo-1.png" alt="" />
                    </div>
                </Link>
                <div className="auth">
                    {
                        (State?.data?.['authorized'] || localStorage.getItem('authorized') === 'true') ?
                            <div className='checkIn'>
                                <Button onClick={handleLogOut} variant="contained">LogOut</Button>
                                <Link to={`/user/${localStorage.getItem('user_id')}`}>
                                    <AccountCircleIcon />
                                </Link>
                            </div> :
                            <div className='checkIn'>
                                <Link to='signup'>
                                    <Button variant="contained">SignUp</Button>
                                </Link>
                                <Link to='/login'>
                                    <Button variant="contained">LogIn</Button>
                                </Link>
                            </div>

                    }


                </div>
            </div>
            <div className="blur"></div>
        </div>
    )
}

export default Nav
