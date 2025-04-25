import Rodape from "../../componentes/Rodape"
import { CorpoPrincipal } from "../../componentes/Corpo"
import { Box } from "@mui/material"
import SearchAppBar from "../../componentes/Cabecalho/SearchAppBar"

function App() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SearchAppBar />
        <CorpoPrincipal />
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <Rodape />
      </Box>
    </Box>
  )
}

export default App
