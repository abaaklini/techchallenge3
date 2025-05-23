import axios from "axios";


// const api = axios.create({});

// Interceptor para adicionar token JWT em todas as requisições
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    // TODO - Colocar uma env var aqui
    config.baseURL = "http://localhost:3000/"
    if (config.url?.startsWith("/api")) {
        config.url = config.url.replace("/api", "");
    }
    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;   
    }
    return config;
})
// export default api;

// Exemplo de chamada de API
// export async function fetchPosts() {
//     const response = await axios.get("/posts");
//     return response.data;
// }
