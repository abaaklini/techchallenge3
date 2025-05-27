import Rodape from "../../componentes/Rodape"
import SearchAppBar from "../../componentes/Cabecalho"
import { FormularioPosts } from "../../componentes/Formulario"
import { Box } from "@mui/material"
// import '../../main.css'

function Create() {

    return (
        <Box className='bgPattern' sx={{ flexGrow: 1 }}>
            <SearchAppBar />
            <FormularioPosts/>
            <Rodape />
        </Box>
    )
}

export default Create