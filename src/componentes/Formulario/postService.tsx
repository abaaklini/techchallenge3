import axios from "axios";
import { IPostProps } from "../../types/post";

type PostPayload = Omit<IPostProps, "_id">;

export const getPost = (id: string) =>
  axios.get<IPostProps>(`/api/posts/${id}`);
export const createPost = (data: PostPayload) =>
  axios.post("/api/posts/", data);
export const updatePost = (id: string, data: PostPayload) =>
  axios.put(`/api/posts/${id}`, data);
