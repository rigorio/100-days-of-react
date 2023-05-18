import axios from 'axios';

const baseURI = axios.create({
    baseURL: 'http://localhost:3000'
});

export const fetchString = () => {
    return baseURI.get('string');
}