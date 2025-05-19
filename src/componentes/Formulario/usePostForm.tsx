import { useState, useEffect } from "react";
import { getPost, createPost, updatePost } from "./postService";
import { IPostProps } from "../../types/post";

type PostFormData = Omit<IPostProps, "_id">;

export const usePostForm = (id?: string) => {
  const [formData, setFormData] = useState<PostFormData>({
    titulo: "",
    conteudo: "",
    autor: "",
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      getPost(id)
        .then((res) => setFormData(res.data))
        .catch((err) => console.error("Erro ao buscar o post:", err));
    }
  }, [id]);

  const handleChange = (key: keyof PostFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updatePost(id, formData);
      } else {
        await createPost(formData);
      }
      setSuccess(true);
    } catch (err) {
      console.error("Erro ao salvar o post:", err);
    }
  };

  return { formData, success, handleChange, handleSubmit };
};
