import Rodape from "../../componentes/Rodape"
import { CorpoPrincipalDashboard } from "../../componentes/Corpo"
import { Box } from "@mui/material"
import SearchAppBar from "../../componentes/Cabecalho"
// import '../../main.css'

function Dashboard() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box sx={{ flexGrow: 1 }}>
                <SearchAppBar />
                <CorpoPrincipalDashboard />
            </Box>
            <Box sx={{ flexShrink: 0 }}>
                <Rodape />
            </Box>
        </Box>
    )
}

export default Dashboard