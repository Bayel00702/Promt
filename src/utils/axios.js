import axios from 'axios'

const token = JSON.parse(localStorage.getItem("@@remember-rootState")).auth.token;
const instance = axios.create({
    baseURL: 'http://localhost:4444',
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export default instance