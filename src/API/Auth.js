import axios from 'axios'


const base_URL = 'http://127.0.0.1:3333'


export const login_API = (cred) => axios.post(`${base_URL}/login`, cred);

export const logout_API = () => axios.get(`${base_URL}/logout`);

export const signup_API = (cred) => axios.post(`${base_URL}/register`, cred);