import { Box, Button, TextField, Typography } from "@mui/material";
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Box sx={{ width: '100%', maxWidth: 800, padding: 2, borderRadius: 2, boxShadow: 3 }}>
                {sucesso && (
                    <Alert severity="success" style={{ margin: '20px' }}>
                        {parametros.id ? "Post editado com sucesso!" : "Post criado com sucesso!"}
                    </Alert>
                )}
                {parametros.id ? (
                    <Typography variant="h4" component="h1" gutterBottom>
                        Editar Post
                    </Typography>
                ) : (
                    <Typography variant="h4" component="h1" gutterBottom>
                        Criar Novo Post
                    </Typography>
                )}
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        value={titulo}
                        onChange={evento => setTitulo(evento.target.value)}
                        label="Título"
                        variant="outlined"
                        required
                        fullWidth margin="normal" />
                    <TextField
                        value={conteudo}
                        onChange={evento => setConteudo(evento.target.value)}
                        label="Conteúdo"
                        variant="outlined"
                        required
                        fullWidth margin="normal"
                        multiline rows={4} />
                    <TextField
                        value={autor}
                        onChange={evento => setAutor(evento.target.value)}
                        label="Autor"
                        variant="outlined"
                        required
                        fullWidth margin="normal" />
                    {parametros.id ? (
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth>
                            Salvar Alterações
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth>
                            Criar Post
                        </Button>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default FormularioPosts;