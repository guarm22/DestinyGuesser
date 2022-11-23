import axios from 'axios'
axios.defaults.withCredentials = true;
const api = axios.create({
    baseURL: '/api',
})

export const getLoggedIn = () => api.get(`/loggedIn/`);
export const registerUser = (payload) => api.post(`/register/`, payload)
export const loginUser = (payload) => api.post(`/login/`, payload)
export const logoutUser = () => api.get(`/logout/`)
export const updateUser = (payload) => api.put(`/user/`, payload)

export const createLocation = (payload) => api.post(`/createLocation/`, payload)

export const createTriviaQuestion = (payload) => api.post(`/createTriviaQuestion`, payload)

const apis= {
    registerUser,
    getLoggedIn,
    loginUser,
    logoutUser,
    updateUser,

    createLocation,

    createTriviaQuestion,
}

export default apis;