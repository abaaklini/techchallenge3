import { Box, Button, TextField, Typography, Alert } from "@mui/material";
import { PostFormProps } from "../../types/post";

export const PostForm = ({
  isEditMode,
  formData,
  success,
  onChange,
  onSubmit,
}: PostFormProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: 800,
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {success && (
        <Alert severity="success" style={{ margin: "20px" }}>
          {isEditMode
            ? "Post editado com sucesso!"
            : "Post criado com sucesso!"}
        </Alert>
      )}
      <Typography variant="h4" component="h1" gutterBottom>
        {isEditMode ? "Editar Post" : "Criar Novo Post"}
      </Typography>
      <Box component="form" onSubmit={onSubmit}>
        <TextField
          value={formData.titulo}
          onChange={(e) => onChange("titulo", e.target.value)}
          label="Título"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          value={formData.conteudo}
          onChange={(e) => onChange("conteudo", e.target.value)}
          label="Conteúdo"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <TextField
          value={formData.autor}
          onChange={(e) => onChange("autor", e.target.value)}
          label="Autor"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          {isEditMode ? "Salvar Alterações" : "Criar Post"}
        </Button>
      </Box>
    </Box>
  </Box>
);
