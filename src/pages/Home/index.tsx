import Cabecalho from "../../componentes/Cabecalho"
import Rodape from "../../componentes/Rodape"
import { CorpoPrincipal } from "../../componentes/Corpo"
import { Box } from "@mui/material"

function App() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Cabecalho />
        <CorpoPrincipal />
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <Rodape />
      </Box>
    </Box>
  )
}

export default App
