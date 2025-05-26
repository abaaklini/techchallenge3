import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/useAuth";
import axios from "axios";

import { Box, Button, Container, TextField, Typography, Paper } from "@mui/material";

interface ILoginResponse { token: string };

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post<ILoginResponse>("/api/login", { email, password });
            const { token } = response.data;
            login(token);
            navigate("/posts");
        } catch (error) {
            console.error("Erro ao buscar os posts:", error);
            alert("Login falhou");
        }
    };

    return (
        <Container className='bgPattern' maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="E-mail"
                        type="email"
                        fullWidth
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Senha"
                        type="password"
                        fullWidth
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Entrar
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
