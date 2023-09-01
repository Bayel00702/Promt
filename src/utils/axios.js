import axios from 'axios'

const token = localStorage.getItem("@@remember-rootState") ? JSON.parse(localStorage.getItem("@@remember-rootState")).auth.token : "";

const instance = axios.create({
    baseURL: 'http://localhost:4444',
    headers: {
        "authorization": `Bearer ${token ? token : ""}`
    }
});

export default instance