import axios from 'axios'

const LOGIN_API_BASE_URL = "http://localhost:8080/Login";

class LoginService {

    postLogin(login:Object) {
        return axios.post(LOGIN_API_BASE_URL,login, {withCredentials:true});
    }
}

export default new LoginService();