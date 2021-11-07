import axios from 'axios'

const base_URL = 'http://127.0.0.1:3333/posts'


export const FetchingPosts_API = () => axios.get(base_URL);

export const CreatingPost_API = (newPost) => axios.post(base_URL, newPost);

export const UpdatingPost_API = (id, updatedPost) => axios.patch(`${base_URL}/${id}`, updatedPost);

export const DeleteingPost_API = (id) => axios.delete(`${base_URL}/${id}`)