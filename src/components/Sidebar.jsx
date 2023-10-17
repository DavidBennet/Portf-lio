import '../styles/componets/Sidebar.sass'
import avatar from '../img/avatar.png'

export function Sidebar() {
    return(
        <aside id="sidebar">
            <img src={avatar} alt="foto do pérfil" />
            <h2 className="title"></h2>
            <p>redes sociais</p>
            <p>contatos</p>
            <a href="" className="btn">Download Curriculo</a>
        </aside>
    )
}