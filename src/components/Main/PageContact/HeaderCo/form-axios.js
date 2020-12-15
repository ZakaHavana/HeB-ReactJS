import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://heb-form-default-rtdb.firebaseio.com/'
});

export default instance;
