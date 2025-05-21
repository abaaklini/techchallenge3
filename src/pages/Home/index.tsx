import Rodape from "../../componentes/Rodape"
import { Box } from "@mui/material"
import SearchAppBar from "../../componentes/Cabecalho/SearchAppBar"
import { CorpoPrincipalComponent } from "../../main/factories/CorpoPrincipalComponent"

function App() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        <SearchAppBar />
        <CorpoPrincipalComponent />
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <Rodape />
      </Box>
    </Box>
  )
}

export default App
