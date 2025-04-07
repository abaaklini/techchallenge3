import EstilosGlobais from "../../componentes/EstilosGlobais"
import Cabecalho from "../../componentes/Cabecalho"
import Rodape from "../../componentes/Rodape"
import { CorpoPrincipal } from "../../componentes/Corpo"
import conteudo from "../../json/db.json"

function Dashboard() {

    return (
        <>
            <EstilosGlobais />
            <Cabecalho />
            <CorpoPrincipal posts={conteudo} />
            <Rodape />
        </>
    )
}

export default Dashboard