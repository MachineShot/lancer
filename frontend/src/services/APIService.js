import axios from 'axios';

const EMPLOYEE_API_REST_URL = "http://localhost:8080/api/employees";
const RATING_API_REST_URL = "http://localhost:8080/api/ratings";
const QUERY_API_REST_URL = "http://localhost:8080/api/queries";
const USER_API_REST_URL = "http://localhost:8080/api/users";
const REGISTER_API_REST_URL = "http://localhost:8080/register";

class APIService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_REST_URL);
    }

    getRatings() {
        return axios.get(RATING_API_REST_URL);
    }

    getQueries() {
        return axios.get(QUERY_API_REST_URL);
    }

    getUsers() {
        return axios.get(USER_API_REST_URL);
    }

    getRegister() {
        return axios.get(REGISTER_API_REST_URL);
    }

}

export default new APIService();

