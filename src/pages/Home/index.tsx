import Cabecalho from "../../componentes/Cabecalho"
import Rodape from "../../componentes/Rodape"
import { CorpoPrincipal } from "../../componentes/Corpo"
import { Link } from "react-router"

function App() {

  return (
    <>
      <Cabecalho />
      <Link to="/read">Read</Link>
      <CorpoPrincipal />
      <Rodape />
    </>
  )
}

export default App
