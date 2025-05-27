import SearchAppBar from "../../componentes/Cabecalho"
import { CorpoLeitura } from "../../componentes/Corpo"
import Rodape from "../../componentes/Rodape"
import { Box } from "@mui/material"
// import '../../main.css'

function Read() {

    return (
        <Box className='bgPattern' sx={{ flexGrow: 1 }}>
            <SearchAppBar />
            <CorpoLeitura />
            <Rodape />
        </Box>
    )
}

export default Read