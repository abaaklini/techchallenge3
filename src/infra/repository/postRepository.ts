import axios from "axios";
import { GetPostById, GetPosts } from "../../domain";
import { IPostProps } from "../../domain/models";

export class PostRepository implements GetPosts, GetPostById {
    async get(): Promise<IPostProps[]> {
        let response = null
        try {
            const url = import.meta.env.VITE_API_URL
            response = await axios.get<IPostProps[]>(`${url}/posts/`)
            console.log("COCOZAOOOOO", response)
        } catch (error) {
            console.error("Erro ao buscar os posts:", error);
            throw new Error("Erro ao buscar os posts");
        }
        return response.data;
    }
    async getById(id: string): Promise<IPostProps> {
        let response = null
        try {
            const url = import.meta.env.VITE_API_URL
            response = await axios.get<IPostProps>(`${url}/posts/${id}`)
        } catch (error) {
            console.error("Erro ao buscar o post:", error);
            throw new Error("Erro ao buscar o post");
        }
        return response.data;
    }
}



// Promisse substituiu o callback
// um jeito readable e managed pra criar funções assíncronas