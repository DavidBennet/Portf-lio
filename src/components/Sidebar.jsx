import '../styles/componets/Sidebar.sass'
import avatar from '../img/avatar.png'
import { SocialNetworks } from './SocialNetworks'
import { InformationContainer } from './InformationContainer'

export function Sidebar() {
    return(
        <aside id="sidebar">
            <img src={avatar} alt="foto do pérfil" />
            <h2 className="title">Desenvolvedor</h2>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="" className="btn">Download Curriculo</a>
        </aside>
    )
}