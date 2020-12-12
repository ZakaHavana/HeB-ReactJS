import axios from 'axios';

const instance = axios.create({
    baseURL:'https://heb-project.firebaseio.com/'
});

export default instance;
