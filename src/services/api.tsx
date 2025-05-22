import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/",
});

// Interceptor para adicionar token JWT em todas as requisições
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

// Exemplo de chamada de API
export async function fetchPosts() {
    const response = await api.get("/posts");
    return response.data;
}
