import EstilosGlobais from "../../componentes/EstilosGlobais"
import Cabecalho from "../../componentes/Cabecalho"
import Rodape from "../../componentes/Rodape"
import { Post } from "../../componentes/Corpo"

function Read() {

    return (
        <>
            <EstilosGlobais />
            <Cabecalho />
            <Post />
            <Rodape />
        </>
    )
}

export default Read