import axios from "axios";

axios.defaults.baseURL="http://localhost:5000/api";

const http = {
    put : axios.put,
    get : axios.get,
    post : axios.post,
    delete : axios.delete
};

export default http;