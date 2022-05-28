import axios from 'axios'

const LOGIN_API_BASE_URL = "http://localhost:8080/Login";

class HomeService {

    postLogin(login:Object) {
        return axios.post(LOGIN_API_BASE_URL,login);
    }

    

    // createEmployee(employee){
    //     return axios.post(EMPLOYEE_API_BASE_URL, employee)
    // }

    // getEmployeeById(employeeId){
    //     return axios.get(EMPLOYEE_API_BASE_URL+ '/' + employeeId);
    // }

    // updateEmployee(employeeId, employee){
    //     return axios.put(EMPLOYEE_API_BASE_URL+ '/' + employeeId , employee);
    // }

    // deleteEmployee(employeeId){
    //     return axios.delete(EMPLOYEE_API_BASE_URL+ '/' + employeeId);
    // }

}

export default new HomeService();