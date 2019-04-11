import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-coffee.firebaseio.com/'
})

export default instance;