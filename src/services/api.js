import axios from "axios";
export const userRequest = axios.create({
    baseURL: 'https://marvelous.pw/api',
    headers: {
        // "Authorization": `Bearer ${localStorage.getItem('id_token')}`,
        "Content-Type": "multipart/form-data"
    },
    timeout: 30000,
});

export const verifyRequest = axios.create({
    baseURL: 'https://marvelous.pw/api',
    headers: {
        // "Authorization": `Bearer ${localStorage.getItem('id_token')}`,
        "Content-Type": "multipart/form-data"
    },
    timeout: 30000,
});


export const userLogin = axios.create({
    baseURL: 'https://marvelous.pw/api',
    headers: {
        // "Authorization": `Bearer ${localStorage.getItem('id_token')}`,
        "Content-Type": "multipart/form-data"
    },
    timeout: 30000,
});
