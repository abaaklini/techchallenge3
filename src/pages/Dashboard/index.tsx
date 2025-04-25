import Cabecalho from "../../componentes/Cabecalho"
import Rodape from "../../componentes/Rodape"
import { CorpoPrincipalDashboard } from "../../componentes/Corpo"
import { Box } from "@mui/material"

function Dashboard() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box sx={{ flexGrow: 1 }}>
                <Cabecalho />
                <CorpoPrincipalDashboard />
            </Box>
            <Box sx={{ flexShrink: 0 }}>
                <Rodape />
            </Box>
        </Box>
    )
}

export default Dashboard