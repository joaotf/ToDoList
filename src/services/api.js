import axios from "axios"

const api = axios.create({baseURL: "https://front-back-react.herokuapp.com/api" })

export default api;