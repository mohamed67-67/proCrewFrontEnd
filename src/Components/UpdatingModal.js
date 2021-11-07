import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import UpdateIcon from '@mui/icons-material/Update';
import { useSelector, useDispatch } from 'react-redux'
import TextField from '@mui/material/TextField';
import { updatingPost } from '../Redux/Posts/Actions';


export default function BasicModal({ id }) {


    const dispatch = useDispatch()
    //modal controllers
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)

    }
    const handleClose = () => {
        setOpen(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updatingPost(id, updatedPost))
        handleClose()
    }

    //post controllers
    const Posts = useSelector(state => state.PostsReducer)
    const chosenPost = Posts.filter(post => post.id === id)

    const [updatedPost, setUpdatedPost] = useState({
        title: chosenPost[0].title,
        subject: chosenPost[0].subject,
    })



    return (
        <div>
            <UpdateIcon onClick={handleOpen} className='update' />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="updating">

                    <form onSubmit={handleSubmit} >
                        <TextField
                            defaultValue={chosenPost[0].title}
                            onChange={e => setUpdatedPost({ ...updatedPost, title: e.target.value })}
                            id="standard-basic"
                            label="Title"
                            variant="standard"
                            required
                        />
                        <TextField
                            required
                            defaultValue={chosenPost[0].subject}
                            onChange={e => setUpdatedPost({ ...updatedPost, subject: e.target.value })}
                            id="standard-multiline-static"
                            label="Subject"
                            multiline
                            rows={4}
                            variant="standard"
                        />
                        <Button type='Submit' variant="contained">Update Post</Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}