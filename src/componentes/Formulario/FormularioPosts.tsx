import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import { useParams } from "react-router";

const FormularioPosts = () => {

    const parametros = useParams();

    useEffect(() => {
        if (parametros.id) {
            axios.get(`/api/posts/${parametros.id}`)
                .then((response) => {
                    setTitulo(response.data.titulo);
                    setConteudo(response.data.conteudo);
                    setAutor(response.data.autor);
                })
                .catch((error) => {
                    console.error("Erro ao buscar o post:", error);
                });
        }
    }, [parametros.id]);

    const [titulo, setTitulo] = useState<string>("");
    const [conteudo, setConteudo] = useState<string>("");
    const [autor, setAutor] = useState<string>("");
    const [sucesso, setSucesso] = useState<boolean>(false);

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        if (parametros.id) {
            // Editar post existente
            axios.put(`/api/posts/${parametros.id}`, {
                titulo: titulo,
                conteudo: conteudo,
                autor: autor
            })
                .then((response) => {
                    setSucesso(true);
                    console.log("Post editado com sucesso:", response.data);
                })
                .catch((error) => {
                    console.error("Erro ao editar o post:", error);
                });
            return;
        } else {
            // Criar novo post
            axios.post("/api/posts/", {
                titulo: titulo,
                conteudo: conteudo,
                autor: autor
            })
                .then((response) => {
                    setSucesso(true);
                    console.log("Post criado com sucesso:", response.data);
                })
                .catch((error) => {
                    console.error("Erro ao criar o post:", error);
                });
        }
    }

    return (
        <div>
            {parametros.id ? (
                <h1>Editar Post</h1>
            ) : (
                <h1>Criar Novo Post</h1>
            )}
            <form onSubmit={handleSubmit}>
                <TextField value={titulo}
                    onChange={evento => setTitulo(evento.target.value)}
                    label="Título"
                    variant="outlined"
                    fullWidth margin="normal" />
                <TextField value={conteudo}
                    onChange={evento => setConteudo(evento.target.value)}
                    label="Conteúdo"
                    variant="outlined"
                    fullWidth margin="normal"
                    multiline rows={4} />
                <TextField value={autor}
                    onChange={evento => setAutor(evento.target.value)}
                    label="Autor"
                    variant="outlined"
                    fullWidth margin="normal" />
                {parametros.id ? (
                    <Button type="submit" variant="contained" color="primary">Salvar Alterações</Button>
                ) : (
                    <Button type="submit" variant="contained" color="primary">Criar Post</Button>
                )}
            </form>
            {sucesso && (
                <Alert severity="success" style={{ marginTop: '20px' }}>
                    {parametros.id ? "Post editado com sucesso!" : "Post criado com sucesso!"}
                </Alert>
            )}
        </div>
    );
}
export default FormularioPosts;