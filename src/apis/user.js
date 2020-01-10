import axios from 'axios';
import * as CONSTANTS from '../constants/constants';
const config = {
    'content-type': 'application/x-www-form-urlencoded',
    'authorization': 'Basic ZGV2Z2xhbi1jbGllbnQ6ZHVy'
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
}