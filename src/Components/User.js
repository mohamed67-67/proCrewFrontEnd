import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletingPost, fetchingPost } from '../Redux/Posts/Actions'
import Avatar from '@mui/material/Avatar';
import PopperPopupState from './AddPost';
import { Link } from 'react-router-dom'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BasicModal from './UpdatingModal';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useParams } from 'react-router-dom';
import moment from 'moment';


const User = () => {

    const { id } = useParams()
    const State = useSelector(state => state.PostsReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchingPost())
    }, [])

    const handleDelete = (id) => {
        dispatch(deletingPost(id))
    }

    const data = State.filter(post => post.user_id == id)


    return (
        <div className='home'>
            {
                localStorage.getItem('authorized') === 'true' ?
                    <Fragment>

                        <div className="popup">
                            <PopperPopupState />
                        </div>
                        {
                            data && data.map(post => (

                                <div key={post.id} className="post">
                                    <div className="details">
                                        <div className="title">
                                            <Avatar>{post.user_name.substring(0, 1)} </Avatar>
                                            <div className="div">
                                                <h5>{post.title}</h5> <br />
                                                <Link to={`/user/${post.user_id}`}>
                                                    <p>by {post.user_name}</p>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="subject">
                                            <p>{post.subject}</p>
                                        </div>
                                        <h4> {moment(post.created_at).fromNow()} </h4>
                                        {
                                            localStorage.getItem('user_id') == post.user_id &&
                                            <div className="icons">
                                                <DeleteOutlineIcon onClick={() => handleDelete(post.id)} className='delete' />
                                                <BasicModal id={post.id} />
                                            </div>
                                        }
                                    </div>
                                    <div className="blur"></div>
                                </div>
                            ))
                        }
                    </Fragment> :
                    <div className="anauthorized">
                        <h1>NOT AUTHORIZED</h1>
                        <Link to='/login'>
                            <h3>Please Log In</h3> <span> <ArrowRightAltIcon /> </span>
                        </Link>
                    </div>
            }

        </div>
    )
}

export default User
