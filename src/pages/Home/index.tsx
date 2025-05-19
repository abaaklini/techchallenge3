import { Box } from "@mui/material"
import Rodape from "../../componentes/Rodape"
import { CorpoPrincipal } from "../../componentes/Corpo"
import SearchAppBar from "../../componentes/Cabecalho"
import '../../main.css'

function App() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box className='bgPattern' sx={{ flexGrow: 1 }}>
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
