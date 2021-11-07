import React, { useState } from 'react';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import PostAddIcon from '@mui/icons-material/PostAdd';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { creatingPost } from '../Redux/Posts/Actions';



export default function PopperPopupState() {

    const dispatch = useDispatch()
    const [newPost, setNewPost] = useState({
        title: '',
        subject: '',
        user_name: localStorage.getItem('user_name'),
        user_id: localStorage.getItem('user_id')
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(creatingPost(newPost))
        setNewPost({ title: '', subject: '' })
    }

    return (
        <PopupState variant="popper" popupId="demo-popup-popper">
            {(popupState) => (
                <div>

                    <div className='addPost' {...bindToggle(popupState)}>
                        <PostAddIcon />
                        <h5>Add Post</h5>
                    </div>

                    <Popper anchorEl='left-end' {...bindPopper(popupState)} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <div className="postForm">
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                                            value={newPost.title}
                                            id="standard-basic"
                                            label="Title"
                                            variant="standard"
                                            required
                                        />
                                        <TextField
                                            required
                                            onChange={e => setNewPost({ ...newPost, subject: e.target.value })}
                                            value={newPost.subject}
                                            id="standard-multiline-static"
                                            label="Subject"
                                            multiline
                                            rows={4}
                                            variant="standard"
                                        />
                                        <Button {...bindToggle(popupState)} type='Submit' variant="contained">Add Post</Button>
                                    </form>
                                </div>
                            </Fade>
                        )}
                    </Popper>
                </div>
            )}
        </PopupState>
    );
}