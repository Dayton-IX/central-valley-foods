import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://central-valley-foods.firebaseio.com/'
});

export default instance;