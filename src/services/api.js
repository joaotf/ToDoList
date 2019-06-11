import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });
//const api = axios.create({ baseURL: "https://front-back-react.herokuapp.com/api" });
 
export default api;
