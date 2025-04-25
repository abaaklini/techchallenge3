import Rodape from "../../componentes/Rodape"
import FormularioPosts from "../../componentes/Formulario/FormularioPosts"
import SearchAppBar from "../../componentes/Cabecalho/SearchAppBar"

function Create() {

    return (
        <>
            <SearchAppBar />
            <FormularioPosts />
            <Rodape />
        </>
    )
}

export default Create