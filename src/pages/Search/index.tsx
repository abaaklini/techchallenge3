import Rodape from "../../componentes/Rodape"
import { CorpoPrincipalSearch } from "../../componentes/Corpo"
import { Box } from "@mui/material"
import SearchAppBar from "../../componentes/Cabecalho"
import { useSearchParams } from "react-router"

function SearchResult() {
    const [searchParams] = useSearchParams();
    const queryParam = searchParams.get('q'); // Lê o parâmetro 'q'

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Box sx={{ flexGrow: 1 }}>
                <SearchAppBar />
                <CorpoPrincipalSearch query={queryParam || ''} />
            </Box>
            <Box sx={{ flexShrink: 0 }}>
                <Rodape />
            </Box>
        </Box>
    )
}

export default SearchResult