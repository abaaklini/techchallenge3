import { Box } from "@mui/material";
import Button from "../Botao";
import { Link } from "react-router";
import "../../main.css";

const AcessoProfessor = () => {
  function logoutHandler(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        p: { xs: 1, sm: 2 },
        justifyContent: "flex-end",
        alignItems: "center",
        mr: { xs: 0, sm: 3 },
      }}
    >
      <Link to="/dashboard/posts" style={{ textDecoration: "none" }}>
        <Button>Área do Professor</Button>
      </Link>

      <Button variant="outlined" onClick={logoutHandler}>Sair</Button>
    </Box>
  );
};

export default AcessoProfessor;
