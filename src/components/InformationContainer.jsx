import '../styles/componets/InformationContainer.sass'
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

export function InformationContainer() {
    return(
        <section id='information-container'>
            <div id='info-card'>
                <AiFillPhone id='phone-icon'/>
                <div>
                    <h3>Phone</h3>
                    <p>+55(81)973-296-068</p>
                </div>
            </div>
            
            <div id='info-card'>
                <AiOutlineMail id='mail-icon'/>
                <div>
                    <h3>Email</h3>
                    <p>srdavidbennet@gmail.com</p>
                </div>
            </div>
            
            <div id='info-card'>
                <AiFillEnvironment id='pin-icon'/>
                <div>
                    <h3>Local</h3>
                    <p>Caruaru / PE</p>
                </div>
            </div>
        </section>
    )
}