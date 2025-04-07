import EstilosGlobais from "../../componentes/EstilosGlobais"
import Cabecalho from "../../componentes/Cabecalho"
import Rodape from "../../componentes/Rodape"
import { Post } from "../../componentes/Corpo"
import conteudo from "../../json/db.json"

function Read() {

    return (
        <>
            <EstilosGlobais />
            <Cabecalho />
            <Post {...conteudo[0]} />
            <Rodape />
        </>
    )
}

export default Read