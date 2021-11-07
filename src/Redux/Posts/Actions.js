import { FetchingPosts_API, CreatingPost_API, UpdatingPost_API, DeleteingPost_API } from "../../API/Posts"


export const fetchingPost = () => async (dispatch) => {

    const Posts = await FetchingPosts_API()

    dispatch({
        type: 'FETCHING',
        payload: Posts.data.posts
    })
}

export const creatingPost = (newPost) => async (dispatch) => {

    const response = await CreatingPost_API(newPost)

    console.log(response);
    dispatch({
        type: 'CREATING',
        payload: response.data
    })
}

export const updatingPost = (id, updated) => async (dispatch) => {

    const updatedPost = await UpdatingPost_API(id, updated)

    dispatch({
        type: 'UPDATING',
        payload: updatedPost.data
    })
}

export const deletingPost = (id) => async (dispatch) => {

    await DeleteingPost_API(id)

    dispatch({
        type: 'DELETING',
        payload: id
    })
}