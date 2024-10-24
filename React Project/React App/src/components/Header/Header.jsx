import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <img src="https://cdn.portal.estacio.br/1_Desktop_ibmec_logo_430884bed1.svg" alt='Logomarca-ibmec'/>
    <Link to="/">Home</Link>
    <Link to="/sobre-nos">Sobre-Nós</Link>
    { window.sessionStorage.getItem('accessToken')
    ? <Link to="/logout">Logout</Link>
    : <Link to="/login">Login</Link>
    }

  </Top>
)

export default Header;