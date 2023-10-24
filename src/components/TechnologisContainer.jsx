import "../styles/componets/TechnologisContainer.sass"
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact } from "react-icons/bi"

const techIcons = [
    {id: "Html5", name: "HTML5", icon: <BiLogoHtml5/>},
    {id: "Css3", name: "CSS3", icon: <BiLogoCss3/>},
    {id: "JavaScript", name: "JS", icon: <BiLogoJavascript/>},
    {id: "React", name: "React", icon: <BiLogoReact/>}
]

export function TechnologisContainer() {
    return(
        <section className="technologis-container">

            <h2>Tecnologias</h2>

            <div className="technologis-grid">
                {techIcons.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>

                        {tech.icon}

                        <div className="technologi-info">

                            <h3>{tech.name}</h3>

                            <p>imformações da tecnologiia</p>

                        </div>

                    </div>
                ))}
            </div>

        </section>
    )
}