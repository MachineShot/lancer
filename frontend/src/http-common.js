import axios from "axios";
import authHeader from './services/auth-header';

export default axios.create({
    baseURL: "https://lancer-stpp.herokuapp.com:8080",
    headers: {
        "Content-type": "application/json",
        "Authorization": authHeader()
}
});
