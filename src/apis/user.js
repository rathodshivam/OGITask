import axios from 'axios';
import * as CONSTANTS from '../constants/constants';
const config = {
    'content-type': 'application/x-www-form-urlencoded',
    'authorization': 'Basic ZGV2Z2xhbi1jbGllbnQ6ZHVy'
}

const config1 = {
    'content-type': 'application/json',
}


export default {
    login: credentials =>
        axios.request({
            url: CONSTANTS.OAUTH + CONSTANTS.TOKEN,
            method: 'post',
            baseURL: CONSTANTS.API_BASE_URL,
            headers: config,
            data: credentials
        }).then(res => res),
    auth: data =>
        axios.request({
            url: CONSTANTS.API + CONSTANTS.AUTH + CONSTANTS.SLASH,
            method: 'post',
            baseURL: CONSTANTS.API_BASE_URL,
            headers: config1,
            data: data
        }).then(res => res),
}