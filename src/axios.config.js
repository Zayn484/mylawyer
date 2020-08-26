import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://layerdirectory.herokuapp.com/api'
});

export default instance;
