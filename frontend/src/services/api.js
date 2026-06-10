import axios from "axios";

const API = axios.create({
  baseURL: "https://react-django-task-manager.onrender.com/api",
});

export default API;