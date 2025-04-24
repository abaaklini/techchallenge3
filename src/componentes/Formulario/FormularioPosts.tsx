import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Alert from '@mui/material/Alert';

const FormularioPosts = () => {
    const [titulo, setTitulo] = useState<string>("");
    const [conteudo, setConteudo] = useState<string>("");
    const [autor, setAutor] = useState<string>("");
    const [sucesso, setSucesso] = useState<boolean>(false);

    const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
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

    return (
        <div>
            <h1>Criar Novo Post</h1>
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
                <Button type="submit" variant="contained" color="primary">Criar Post</Button>
            </form>
            {sucesso && (
                <Alert severity="success" style={{ marginTop: '20px' }}>
                    Post criado com sucesso!
                </Alert>
            )}
        </div>
    );
}
export default FormularioPosts;