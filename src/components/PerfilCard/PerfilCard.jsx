
import { Perfil } from "./Style"

const PerfilCard = (props) => {
    return(
    <Perfil>
            <div className="nome">{props.nome}</div>
            <div className="detalhes">{props.detalhes}</div>

    </Perfil>
)
}

export default PerfilCard;