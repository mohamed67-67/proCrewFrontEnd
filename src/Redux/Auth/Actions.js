import { login_API, signup_API, logout_API } from "../../API/Auth"


export const login = (cred) => async (dispatch) => {

    const response = await login_API(cred);
    localStorage.clear()


    if (response.data.authorized) {
        localStorage.setItem("authorized", "true")
        localStorage.setItem("user_name", response.data.user['name'])
        localStorage.setItem("user_id", response.data.user['id'])
    } else {
        localStorage.setItem('error', response.data.error)
    }

    dispatch({
        type: 'LOGIN',
        payload: response
    })
};

export const signUp = (cred) => async (dispatch) => {

    localStorage.clear()
    const response = await signup_API(cred)
    console.log('rr', response);

    if (response.data['error']) {
        localStorage.setItem('error', response.data.error)
    } else {
        localStorage.setItem("authorized", "true")
        localStorage.setItem("user_name", response.data['name'])
        localStorage.setItem("user_id", response.data['id'])
    }
    // console.log(localStorage);
    dispatch({
        type: 'SIGNUP',
        payload: response
    })
}

export const logOut = () => async (dispatch) => {
    await logout_API()
    localStorage.clear()

    dispatch({
        type: 'LOGOUT',
        payload: {}
    })
}