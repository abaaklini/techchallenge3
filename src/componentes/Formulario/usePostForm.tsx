import { useState, useEffect } from "react";
import { getPost } from "./postService";
import { IPostProps } from "../../types/post";
import axios from "axios";

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

  const handleSubmit = (evento: React.FormEvent<Element>) => {
    evento.preventDefault();
    const token = localStorage.getItem("token");

    if (id) {
      // Editar post existente
      axios
        .put(
          `/api/posts/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setSuccess(true);
          console.log("Post editado com sucesso:", response.data);
        })
        .catch((error) => {
          console.error("Erro ao editar o post:", error);
        });
      return;
    } else {
      // Criar novo post
      axios
        .post(
          "/api/posts/",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setSuccess(true);
          console.log("Post criado com sucesso:", response.data);
        })
        .catch((error) => {
          console.error("Erro ao criar o post:", error);
        });
    }
  };

  return { formData, success, handleChange, handleSubmit };
};
